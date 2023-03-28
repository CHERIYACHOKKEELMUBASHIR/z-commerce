import express from 'express';
import adminController from './admin'
import userController from './user'
import authController from './authentication'

const router = express.Router();

router.use('/', authController);
router.use('/admin', adminController);
router.use('/user', userController);

export default router