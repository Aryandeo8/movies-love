import { Router } from 'express';
import {
  loginUser,
  registerUser,
  refreshAccessToken,
  getCurrentUser
} from '../controllers/user.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';

const userRouter = Router();

userRouter.route("/login").post(loginUser);
userRouter.route("/register").post(registerUser); // Add a separate register route
userRouter.route("/refresh-token").post(refreshAccessToken);
userRouter.route("/current-user").get(verifyJWT, getCurrentUser);

export default userRouter;
