import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { TBooking } from './booking.interface';
import { Booking } from './booking.model';
import { Bike } from '../bike/bike.model';

const createBookingIntoDB = async (payload: TBooking) => {
  const { userId, bikeId } = payload;
  const user = await User.findById(userId);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }

  const bikeExist = await Bike.findById(bikeId);
  if (!bikeExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'bike is not found');
  }

  if (!bikeExist.isAvailable) {
    throw new AppError(httpStatus.FORBIDDEN, 'bike is not available');
  }

  //update isAvailable status
  // if (bikeExist.isAvailable) {
  //   await Bike.findByIdAndUpdate(
  //     { _id: bikeExist?._id },
  //     { isAvailable: false },
  //     { new: true },
  //   );
  // }

  const result = await Booking.create(payload);

  return result;
};

export const BookingServices = {
  createBookingIntoDB,
};
