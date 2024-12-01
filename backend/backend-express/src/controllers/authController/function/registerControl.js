import database from '../../../config/database.js'
import queries from '../queries.js'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';

const createProfileUser = async (userId, firstName, lastName) => {
    const result = await database.query(queries.userProfile.setName, [userId, firstName, lastName]);
}

const registerController = {
    async insertNewUser(form) {
        const id = uuidv4();
        console.log('ID');
        console.log(id);
        const password = bcrypt.hashSync(form.password, 10);
        console.log('FORM');
        console.log(form);
        const result = await database.query(queries.userManagement.setUser, [form.username, form.email, password, id]);
        await createProfileUser(id, form.firstName, form.lastName);
        console.log('INSERTION RESULT');
        console.log(result);
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