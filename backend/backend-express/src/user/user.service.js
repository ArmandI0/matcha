import controller from "./user.controllers";

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

async function getId(req, res) {
    
}

export default user = {
    checkIfProfileExist,
};