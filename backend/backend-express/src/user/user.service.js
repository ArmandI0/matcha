import controller from "./user.controllers.js";
import jwt from 'jsonwebtoken';



async function checkIfProfileExist(req, res) {
    try {
        const status = controller.checkIfProfileExist(req.body.username);
        if (status === true) {
            return res.status(200).json({
                status: true,
            });
        }
        return res.status(200).json({
            status: false,
        });
    }
    catch (error) {
        console.log(error);
    }
}

async function getUserInfos(req, res) {
    try {
        const decoded = jwt.verify(req.cookies.authToken, process.env.JWT_KEY);
        console.log('getUserInfos = ', decoded);
        return res.status(200).json({
            id: decoded.id,
            username: decoded.username,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(403);
    }
}

export const user = {
    checkIfProfileExist,
    getUserInfos,
};