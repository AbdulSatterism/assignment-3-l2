import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { Booking } from './booking.model';
import sendResponse from '../../utils/sendResponse';

const createBooking = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const bookingData = { userId, ...req.body };
  const result = await Booking.create(bookingData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'bike booking successfully',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
};
