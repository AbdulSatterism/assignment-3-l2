import { Types } from 'mongoose';

export type TBooking = {
  userId: Types.ObjectId;
  bikeId: Types.ObjectId;
  startTime: string;
  returnTime: string;
  totalCost: number;
  isReturn: boolean;
  payment: string;
  coupon?: string;
};
