import authController from "../controllers/authController/authController.js";

const checkData = {
    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email)
            return 'Enter a mail adress';
        else if (emailRegex.test(email) === false)
            return 'Invalid mail';
        else if (authController.registerController.checkIfEmailAlreadyExist(email) === true)
            return 'Email already used';
        else
            return '';
    },

    validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!password)
            return 'Enter a password'
        else if (!passwordRegex.test(password))
            return 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character'; 
        else
            return '';
    },
    
    validateName(name) {
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
        if(!name)
            return 'Enter a name';
        else if (!nameRegex.test(name))
            return 'invalid name';
        else
            return '';
    },
    
    async validateUsername(username) {
        const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9._]{3,20}$/;
        if (!username)
            return 'Enter a username';
        else if (!usernameRegex.test(username))
            return 'Invalid password. Your password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.';
        const checkDb = await authController.registerController.checkIfUsernameAlreadyExist(username);
        console.log('DANS la putain de fonction validate USERNAME')
        if (checkDb !== false)
            return 'Username already used';

        console.log("fgdjhfgdjhfgdjkfgdjkfgdjk")
        return '';
    }
};

export default checkData;
