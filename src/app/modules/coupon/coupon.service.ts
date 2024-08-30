import { TCoupon } from './coupon.interface';
import { Coupon } from './coupon.model';

const createCouponIntoDB = async (payload: TCoupon) => {
  const result = await Coupon.create(payload);
  return result;
};

const getAllCouponFromDB = async () => {
  const result = await Coupon.find().sort({ createdAt: -1 });
  return result;
};

const deleteCoupon = async (id: string) => {
  const result = await Coupon.findByIdAndDelete({ _id: id }, { new: true });
  return result;
};

export const CouponServices = {
  createCouponIntoDB,
  getAllCouponFromDB,
  deleteCoupon,
};
