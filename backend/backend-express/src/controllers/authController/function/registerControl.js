import database from '../../../config/database.js'
import queries from '../queries.js'

const insertNewUser = async (form) => {
    const result = await database.query(queries.setUser, [form.username, form.email, form.password]);
    return result;
}

export default insertNewUser;