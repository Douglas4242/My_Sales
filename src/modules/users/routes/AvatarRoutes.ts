import { Router } from 'express';
import UpdateAvatarControllers from '../controllers/UpdateAvatarControllers';
import uploadConfig from '@config/upload';
import multer from 'multer';
import AuthMiddleware from '@shared/middlewares/authMiddleware';

const avatarRouter = Router();
const userAvatarController = new UpdateAvatarControllers();
const upload = multer(uploadConfig);

avatarRouter.patch(
  '/',
  AuthMiddleware.execute,
  upload.single('avatar'),
  userAvatarController.update,
);

export default avatarRouter;
