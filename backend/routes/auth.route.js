import { Router } from 'express';
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = Router();

//@method  POST  /api/auth/login
//@access  public
//@desc    for user login
router.post('/login', login);

//@method  POST  /api/auth/signup
//@access  public
//@desc    for user registration
router.post('/signup', signup);

//@method  POST  /api/auth/login
//@access  private
//@desc    for user logout
router.post('/logout', logout);

export default router;
