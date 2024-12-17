import queries from "./user.queries"
import errManagement from "../config/errorsManagement"
import database from "../config/database"

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