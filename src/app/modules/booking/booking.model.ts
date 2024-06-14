import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';

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

export const Booking = model<TBooking>('Booking', bookingSchema);
