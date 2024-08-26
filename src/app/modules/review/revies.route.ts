import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { reviewValidations } from './review.validation';
import { ReviewControllers } from './review.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(reviewValidations.createReviewValidation),
  ReviewControllers.createReview,
);

router.get('/', ReviewControllers.getAllReviews);

export const ReviewRoutes = router;
