import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';
import { Bike } from '../bike/bike.model';

const bookingSchema = new Schema<TBooking>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bikeId: {
    type: Schema.Types.ObjectId,
    ref: 'Bike',
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  returnTime: {
    type: String,
    default: null,
  },
  totalCost: {
    type: Number,
    default: 0,
  },
  isReturn: {
    type: Boolean,
    default: false,
  },
});

bookingSchema.pre('save', async function (next) {
  await Bike.findByIdAndUpdate(
    this.bikeId,
    { isAvailable: false },
    { new: true },
  );
  next();
});

export const Booking = model<TBooking>('Booking', bookingSchema);
