import { USER_ROLE } from './../auth/auth.const';
import express from 'express';
import { BikeControllers } from './bike.controller';
import validateRequest from '../../middleware/validateRequest';
import { bikeValidations } from './bike.validation';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(bikeValidations.createBikeValidationSchema),
  BikeControllers.createBike,
);

router.get('/', BikeControllers.getAllBikes);
router.get('/:id', BikeControllers.getSingleBike);

router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(bikeValidations.updateBikeValidationSchema),
  BikeControllers.updateBike,
);

router.patch('/rating/:id', BikeControllers.updateRating);

router.delete('/:id', auth(USER_ROLE.admin), BikeControllers.deleteBike);

export const BikeRoutes = router;
