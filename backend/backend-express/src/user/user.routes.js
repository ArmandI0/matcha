import express from 'express';
import { user } from './user.service.js';

const rtUser = express.Router();

rtUser.post('/user-profile-status', user.checkIfProfileExist);
rtUser.get('/get-user-infos', user.getUserInfos);
export default rtUser;
