import httpStatus from 'http-status';
import { ReviewServices } from './review.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.createReviewIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'review added successfully',
    data: result,
  });
});

const getAllReviews = catchAsync(async (req, res) => {
  const result = await ReviewServices.getAllReviewFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'all review get ok',
    data: result,
  });
});

export const ReviewControllers = {
  createReview,
  getAllReviews,
};
