import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { TBooking } from './booking.interface';
import { Booking } from './booking.model';
import { Bike } from '../bike/bike.model';

const createBookingIntoDB = async (payload: TBooking) => {
  const user = await User.findById(payload?.userId);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }

  const bike = await Bike.findById(payload?.bikeId);
  if (!bike) {
    throw new AppError(httpStatus.NOT_FOUND, 'bike is not found');
  }

  if (!bike.isAvailable) {
    throw new AppError(httpStatus.FORBIDDEN, 'bike is not available');
  }

  const result = await Booking.create(payload);
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
};
