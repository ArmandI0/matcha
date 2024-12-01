import database from '../../../config/database.js'
import queries from '../queries.js'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken'

const createProfileUser = async (userId, firstName, lastName) => {
    const result = await database.query(queries.userProfile.setName, [userId, firstName, lastName]);
}

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
            if (error.code === 'ECONNREFUSED') {
                throw {
                    status: 503,
                    message: 'Service temporarily unavailable. Please try again later.',
                };
            }
            else {
                throw {
                    status: 500,
                    message: 'An internal error occurred. Please try again later.',
                };
            }
            
        }
    },
    
    async checkIfEmailAlreadyExist(email) {
        const result = await database.query(queries.userManagement.checkIfEmailAlreadyExist, [email]);
        const ret = result.rows[0].exist
        console.log('ret = ' + ret);
        return ret;
    },

    async checkIfUsernameAlreadyExist(username) {
        const result = await database.query(queries.userManagement.checkIfUsernameAlreadyExist, [username]);
        const ret = result.rows[0].exist
        return ret;
    },

}


export default registerController;