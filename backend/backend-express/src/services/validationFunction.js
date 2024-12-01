import { json } from "express";
import authController from "../controllers/authController/authController.js";

const checkData = {
    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let message = '';
        let error = false;
        const field = 'email';
        if (!email)
            message = 'Enter a mail adress';
        else if (emailRegex.test(email) === false)
            message = 'Invalid mail';
        else if (authController.registerController.checkIfEmailAlreadyExist(email) === true)
            message = 'Email already used';
        if (message !== '')
            error = true;
        return {
            error : error,
            message : message,
            field : field
        }
    },

    validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let message = '';
        let error = false;
        const field = 'password';
        if (!password)
            message = 'Enter a password'
        else if (!passwordRegex.test(password))
            message = 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character'; 
        if (message !== '')
            error = true;
        return {
            error : error,
            message : message,
            field : field
        }
    },
    
    validateName(name) {
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
        let message = '';
        let error = false;
        const field = 'name';
        if(!name)
            message = 'Enter a name';
        else if (!nameRegex.test(name))
            message = 'invalid name';
        if (message !== '')
            error = true;
        return {
            error : error,
            message : message,
            field : field
        }
    },
    
    async validateUsername(username) {
        const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9._]{3,20}$/;
        let message = '';
        let error = false;
        const field = 'username';        
        if (!username)
            message = 'Enter a username';
        else if (!usernameRegex.test(username))
            message = 'Invalid password. Your password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.';
        const checkDb = await authController.registerController.checkIfUsernameAlreadyExist(username);
        if (checkDb !== false)
            message = 'Username already used';
        if (message !== '')
            error = true;
        return {
            error : error,
            message : message,
            field : field
        }
    }
};

export default checkData;
