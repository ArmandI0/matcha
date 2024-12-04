import checkData from './validationFunction.js'
import authController from '../controllers/authController/authController.js'
import jwtToken from './jwtAuthenticate.js';

const validForm = async(form) => {
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
    
    const isValid = await validForm(req.body);
    if (isValid !== true) {
        console.log('isValid');
        console.log(isValid); // Besoin de retourner une erreur
        return res.status(200).json(isValid);
    }
    const token = await authController.registerController.insertNewUser(req.body);
    console.log('Token dans la fonction register');
    console.log(token);
    res.cookie('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        maxAge: 86400000
    });
    return res.status(200).json({
        error: false,
        message: '',
        field: '',
    });
}



const auth = {
    register,
    isAuthenticated,
}

export default auth;