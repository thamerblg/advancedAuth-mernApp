import express from 'express'
import { logOut, signIn, signUp } from '../controllers/authControllers.js';

const router = express.Router();

router.post("/login", signIn);
router.post("/register", signUp);
router.post("/logout", logOut);

export default router;