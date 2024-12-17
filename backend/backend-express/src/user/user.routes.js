import express from 'express';
import user from './user.service';

const rtUser = express.Router();

rtUser.post('/user-profile-status', user.checkIfProfileExist);

export default rtUser;