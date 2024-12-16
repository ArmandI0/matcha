import errManagement from '../config/errorsManagement.js';
import database from '../config/database.js'
import queries from './auth.queries.js'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
    
const register = {
    async insertNewUser(form) {
        try {
            const id = uuidv4();
            const password = bcrypt.hashSync(form.password, 10);
            await database.query(queries.userManagement.setUser, [form.username, form.email, password, id]);
            await database.query(queries.userProfile.setName, [id, form.firstName, form.lastName]);
            return true;
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

const login = {
    async login(form) {
        try {
            console.log(form.username);
            const dataUser = await database.query(queries.userManagement.getUserByUsername, [form.username]);
            console.log(dataUser);
            const user = await dataUser.rows[0];
            console.log(user.id);
            console.log(user.username);
            console.log(user.email);
            return user;
        }
        catch(error) {
            throw errManagement.handleDatabaseError(error);
        }
    },
}

const authController = {
    register,
    login,
}


export default authController;