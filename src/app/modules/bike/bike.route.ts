import express from 'express';
import { BikeControllers } from './bike.controller';
import validateRequest from '../../middleware/validateRequest';
import { bikeValidations } from './bike.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../auth/auth.const';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(bikeValidations.createBikeValidationSchema),
  BikeControllers.createBike,
);

router.get('/', BikeControllers.getAllBikes);

router.put(
  '/:id',
  validateRequest(bikeValidations.updateBikeValidationSchema),
  BikeControllers.updateBike,
);

router.delete('/:id', BikeControllers.deleteBike);

export const BikeRoutes = router;
