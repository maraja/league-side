import config from 'config';
import jwt from 'jsonwebtoken';


export default {
    createToken: async (data) => {
        return await jwt.sign(data, config.jwt.secret, {expiresIn: config.jwt.expiration});
    }
}
