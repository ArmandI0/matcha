import express from 'express';
import auth from './auth.services.js';

const rtUser = express.Router();

rtUser.post('/register', auth.register);

export default rtUser;