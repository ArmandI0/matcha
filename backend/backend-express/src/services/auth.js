import checkData from './validationFunction.js'
import authController from '../controllers/authController/authController.js'

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

const checkAuth = async(req, res) => {

}

const register = async (req, res) => {
    console.log(req.body);
    
    const isValid = await validForm(req.body);
    if (isValid !== true) {
        console.log('isValid');
        console.log(isValid); // Besoin de retourner une erreur
        return res.status(200).json(isValid);
    }
    const token = authController.registerController.insertNewUser(req.body);
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
}

export default auth;