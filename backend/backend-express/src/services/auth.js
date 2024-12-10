import checkData from './validationFunction.js'
import authController from '../controllers/authController/authController.js'
import jwtToken from './jwtAuthenticate.js';
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';

const validRegisterForm = async(form) => {
    const validator = {
        username: checkData.validateUsername,
        email: checkData.validateEmail,
        password: checkData.validatePassword,
        lastName: checkData.validateName,
        firstName: checkData.validateName,
    };

    for (const field in validator) {
        const validationFct = validator[field];
        const value = form[field];
        const status = await validationFct(value);
        if (status.error === true) {
            return status;
        }
    }
    return true;
}

const validLoginForm = async(form) => {
    const validator = {
        username: checkData.validateUsername,
        password: checkData.validatePassword,
    };

    for (const field in validator) {
        const validationFct = validator[field];
        const value = form[field];
        const status = await validationFct(value);
        if (status.error === true) {
            return status;
        }
    }
    return true;
}

const isAuthenticated = async(req, res) => {
    const ret = await jwtToken.verifyAuthentification(req.cookies.authToken);
    if (ret === false) {
        return res.status(200).json({auth : false});
    }
    else {
        return res.status(200).json({auth : true});     
    }
}

const register = async (req, res) => {
    console.log(req.body);
    
    const isValid = await validRegisterForm(req.body);
    if (isValid !== true) {
        console.log('isValid');
        console.log(isValid); // Besoin de retourner une erreur
        return res.status(200).json(isValid);
    }
    const status = await authController.registerController.insertNewUser(req.body);
    // console.log('Token dans la fonction register');
    // console.log(token);
    // res.cookie('authToken', token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production',
    //     sameSite: 'Strict',
    //     maxAge: 86400000
    // });
    return res.status(200).json({
        error: false,
        message: '',
        field: '',
    });
}

const login = async(req, res) => {
    console.log('request body from login function');
    console.log(req.body);

    // const isValid = await validLoginForm(req.body);
    // if (isValid != true) {
    //     return res.status(200).json(isValid);
    // }
    const User = await authController.loginController.login(req.body);
    const status = bcrypt.compareSync(req.body.password, User.password);
    if (status === true) {
        console.log('COUCOU');
        const token = await jwtToken.create({id: User.id, username: User.username});
        res.cookie('authToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 86400000
        });
        return res.status(200).json({
            login: true,
        })
    }
    else {
        console.log('ERREUR');
    }
    return res.status(200).json({
        login: false,
    })
}

const auth = {
    register,
    isAuthenticated,
    login,
}

export default auth;