/* eslint-disable no-unsafe-optional-chaining */
import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { TBooking } from './booking.interface';
import { Booking } from './booking.model';
import { Bike } from '../bike/bike.model';
import returnNewDate from './booking.utils';

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

  const result = await Booking.create(payload);

  return result;
};

// return bike and update totalCost and return time
const returnBikesIntoDB = async (id: string) => {
  //check booking bike exist or not
  const bookingExist = await Booking.findById(id);

  if (!bookingExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'booking bike not found');
  }

  //bike
  const updateReturnTime = await Booking.findByIdAndUpdate(
    id,
    { returnTime: returnNewDate() },
    { new: true },
  );

  if (!updateReturnTime) {
    throw new AppError(httpStatus.FORBIDDEN, 'failed to update return time');
  }

  const bikeInfo = await Bike.findById(bookingExist?.bikeId);
  if (!bikeInfo) {
    throw new AppError(httpStatus.FORBIDDEN, 'failed find bike info');
  }

  //time calculation
  const startTime = new Date(updateReturnTime?.startTime).getTime();
  const returnTime = new Date(updateReturnTime?.returnTime).getTime();
  const timeDifferent = returnTime - startTime;

  const differenceInSeconds = Math.floor(timeDifferent / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);

  const totalCost = differenceInHours * bikeInfo?.pricePerHour;

  //update totalCost and
  const returnBooking = await Booking.findByIdAndUpdate(
    id,
    { totalCost, isReturn: true },
    { new: true },
  );

  await Bike.findByIdAndUpdate(
    bikeInfo?._id,
    { isAvailable: true },
    { new: true },
  );

  return returnBooking;
};

const getAllBookingBike = async () => {
  const result = await Booking.find().populate('bikeId').populate('userId');
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  returnBikesIntoDB,
  getAllBookingBike,
};
