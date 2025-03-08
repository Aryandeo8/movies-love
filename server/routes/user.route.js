import {Router } from 'express';
import {
    loginUser,
    registerUser,
    refreshAccessToken,
    getCurrentUser
} from '../controllers/user.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';
const router = Router();


router.route("/login").post(loginUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/current-user").get(verifyJWT, getCurrentUser)

export default router;