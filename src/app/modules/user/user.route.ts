import validateRequest from '../../middleware/validateRequest';
import { UserController } from './user.cotroller';
import express from 'express';
import { UserValidations } from './user.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../auth/auth.const';

const router = express.Router();

router.get('/', auth(USER_ROLE.admin), UserController.allUser);

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

router.put(
  '/user-update-admin/:id',
  auth(USER_ROLE.admin),
  validateRequest(UserValidations.updateUserValidationSchema),
  UserController.updateUserOnlyAdmin,
);

router.put(
  '/toggle-role/:id',
  auth(USER_ROLE.admin),
  UserController.toggleRole,
);

router.delete(
  '/delete-user/:id',
  auth(USER_ROLE.admin),
  UserController.deleteUser,
);

export const UserRoutes = router;
