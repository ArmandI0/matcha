import jwt from 'jsonwebtoken'

const jwtToken = {
    async create(infos) {
        const newToken = jwt.sign(
            infos,
            process.env.JWT_KEY,
            {expiresIn: '24h'}
        );
        console.log('CREATION DU JWT TOKEN =>');
        console.log(newToken);
        return newToken;
    },

    async verifyAuthentification(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            return decoded;
        }
        catch(error) {
            console.log('Error :' + error);
            return false;
        }
    }
}

export default jwtToken;