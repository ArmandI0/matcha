import jwt, { verify } from 'jsonwebtoken'

const jwtToken = {
    async create(infos) {
        const newToken = jwt.sign(
            infos,
            process.env.JWT_KEY,
            {expiresIn: '24h'}
        );
        return newToken;
    },

    async verify() {
        
    }

}