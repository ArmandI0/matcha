import express from 'express';
import auth from './auth.services.js';

const rtAuth = express.Router();

rtAuth.post('/register', auth.register);
rtAuth.get('/authenticated', auth.isAuthenticated);
rtAuth.post('/login', auth.login);
rtAuth.post('/logout', auth.logout);


export default rtAuth;