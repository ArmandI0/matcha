import checkData from './validationFunction.js'
import authController from '../controllers/authController/authController.js';

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
        const error = await validationFct(value);
        if (error !== '') return false;
    }
    return true;
} 

const register = async (req, res) => {
    console.log("OCUOUC");
    console.log(req.body);
    
    const isValid = await validForm(req.body);
    if (!isValid)
        console.log('invalid data'); // Besoin de retourner une erreur
    authController.insertUser(req.body);

    return res.status(200);
}


const auth = {
    register,
}

export default auth;