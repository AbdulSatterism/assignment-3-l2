import validateRequest from '../../middleware/validateRequest';
import { UserController } from './user.cotroller';
import express from 'express';
import { UserValidations } from './user.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../auth/auth.const';

const router = express.Router();

router.get(
  '/me',
  auth(USER_ROLE.admin, USER_ROLE.user),
  UserController.getUser,
);
router.put(
  '/me',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(UserValidations.updateUserValidationSchema),
  UserController.updateUserMe,
);

export const UserRoutes = router;
