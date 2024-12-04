import express from 'express';
import auth from '../services/auth.js';

const rtAuth = express.Router();

rtAuth.post('/register', auth.register);
rtAuth.get('/authenticated', auth.isAuthenticated);

export default rtAuth;