import errManagement from '../../../config/errorsManagement.js';
import database from '../../../config/database.js'
import queries from '../queries.js'
import bcrypt from 'bcrypt'
import jwtToken from '../../../services/jwtAuthenticate.js';

const loginController = {
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

export default loginController;