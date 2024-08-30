import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { couponValidations } from './coupon.validation';
import { CouponControllers } from './coupon.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(couponValidations.createCouponValidation),
  CouponControllers.createCoupon,
);

router.delete('/:id', CouponControllers.deleteCoupon);

router.get('/', CouponControllers.getAllCoupons);

export const CouponRoutes = router;
