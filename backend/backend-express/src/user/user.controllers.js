import queries from "./user.queries.js"
import errManagement from "../config/errorsManagement.js"
import database from "../config/database.js"

const profile = {
    async checkIfUserProfileExist(username) {
        try {
            const res = await database.query(queries.userProfile.checkIfProfileExist, [username]);
            const ret = res.rows[0].exist;
            return ret;

        }
        catch (error) {
            throw errManagement.handleDatabaseError(error);
        }
    }
}

const controller = {
    profile,
}

export default controller;