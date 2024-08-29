import { Router } from 'express';
import { BikeRoutes } from '../modules/bike/bike.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';
import { BookingRoutes } from '../modules/booking/booking.route';
import { ReviewRoutes } from '../modules/review/revies.route';
import { contactRoute } from '../modules/contact/contact.route';
import { paymentRoute } from '../modules/payment/payment.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/bikes',
    route: BikeRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/rentals',
    route: BookingRoutes,
  },
  {
    path: '/reviews',
    route: ReviewRoutes,
  },
  {
    path: '/contact',
    route: contactRoute,
  },
  {
    path: '/rental-pay',
    route: paymentRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
