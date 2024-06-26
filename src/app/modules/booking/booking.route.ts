import express from 'express';

import { BookingControllers } from './booking.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../auth/auth.const';
import validateRequest from '../../middleware/validateRequest';
import { BookingValidations } from './booking.validation';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(BookingValidations.createBookingValidationSchema),
  BookingControllers.createBooking,
);

router.put(
  '/:id/return',
  auth(USER_ROLE.admin),
  BookingControllers.returnBooking,
);

router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  BookingControllers.getBooking,
);

export const BookingRoutes = router;
