import express from 'express'
const router = express.Router()
import { authUser, registerUser, getUser, updateUser, getUsers } from "../controllers/userController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUser).put(protect, updateUser)

export default router