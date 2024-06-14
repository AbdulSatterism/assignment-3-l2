import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices } from './booking.service';

const createBooking = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const bookingData = { userId, ...req.body };
  const result = await BookingServices.createBookingIntoDB(bookingData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'bike booking successfully',
    data: result,
  });
});

const returnBooking = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BookingServices.returnBikesIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'bike return update successfully',
    data: result,
  });
});

const getBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingBike();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'all booking retrieved  successfully',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
  returnBooking,
  getBooking,
};
