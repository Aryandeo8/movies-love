import {Router } from 'express';
import {
    loginUser,
    registerUser,
    refreshAccessToken,
    getCurrentUser
} from '../controllers/user.controller.js';

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/current-user").get(verifyJWT, getCurrentUser)

export default router;