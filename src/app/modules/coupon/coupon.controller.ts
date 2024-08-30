import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CouponServices } from './coupon.service';

const createCoupon = catchAsync(async (req, res) => {
  const result = await CouponServices.createCouponIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'coupon added successfully',
    data: result,
  });
});

const getAllCoupons = catchAsync(async (req, res) => {
  const result = await CouponServices.getAllCouponFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'all coupon get ok',
    data: result,
  });
});

const deleteCoupon = catchAsync(async (req, res) => {
  const result = await CouponServices.deleteCoupon(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'coupon deleted successfully',
    data: result,
  });
});

export const CouponControllers = {
  createCoupon,
  getAllCoupons,
  deleteCoupon,
};
