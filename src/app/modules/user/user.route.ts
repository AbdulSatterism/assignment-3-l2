import validateRequest from '../../middleware/validateRequest';
import { UserController } from './user.cotroller';
import express from 'express';
import { UserValidations } from './user.validation';

const router = express.Router();

router.get('/me', UserController.getUser);
router.put(
  '/me',
  validateRequest(UserValidations.updateUserValidationSchema),
  UserController.updateUserMe,
);

export const UserRoutes = router;
