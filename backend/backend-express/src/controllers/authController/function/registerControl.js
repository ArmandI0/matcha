import database from '../../../config/database.js'
import queries from '../queries.js'
import bcrypt from 'bcrypt'

const registerController = {
    async insertNewUser(form) {
    
        const password = bcrypt.hashSync(form.password, 10);
    
        const result = await database.query(queries.userManagement.setUser, [form.username, form.email, password]);
        return result;
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