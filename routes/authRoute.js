import express from 'express';
import {registerController,loginController,testController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from '../middlewares/authmiddleware.js';

//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register',registerController)

//login||post
router.post('/login',loginController)

//test router
router.get('/test',requireSignIn,isAdmin,testController)

export default router










