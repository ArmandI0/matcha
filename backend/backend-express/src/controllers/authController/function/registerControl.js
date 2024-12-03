import errManagement from '../../../config/errorsManagement.js';
import database from '../../../config/database.js'
import queries from '../queries.js'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken'
    
const registerController = {
    async insertNewUser(form) {
        try {
            const id = uuidv4();
            const password = bcrypt.hashSync(form.password, 10);
            await database.query(queries.userManagement.setUser, [form.username, form.email, password, id]);
            await database.query(queries.userProfile.setName, [id, form.firstName, form.lastName]);
            const token = jwt.sign(
                {id: id, username: form.username},
                process.env.JWT_KEY,
                { expiresIn: '24h' }
            );
            return token;
        }
        catch(error) {
            throw errManagement.handleDatabaseError(error);
        }
    },
    
    async checkIfEmailAlreadyExist(email) {
        try {
            const result = await database.query(queries.userManagement.checkIfEmailAlreadyExist, [email]);
            const ret = result.rows[0].exist
            return ret;
        }
        catch(error) {
            throw errManagement.handleDatabaseError(error);
        }
    },

    async checkIfUsernameAlreadyExist(username) {
        try {
            const result = await database.query(queries.userManagement.checkIfUsernameAlreadyExist, [username]);
            const ret = result.rows[0].exist
            return ret;
        }
        catch(error) {
            throw errManagement.handleDatabaseError(error);
        }
    },

}


export default registerController;