import { Router } from 'express';
import { BikeRouter } from '../modules/bike/bike.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/bikes',
    route: BikeRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
