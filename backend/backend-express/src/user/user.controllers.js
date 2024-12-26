import queries from "./user.queries.js"
import errManagement from "../config/errorsManagement.js"
import database from "../config/database.js"

const profile = {
    async checkIfUserProfileExist(userId) {
        try {
            const res = await database.query(queries.userProfile.checkIfProfileExist, [userId]);
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