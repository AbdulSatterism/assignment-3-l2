import { z } from 'zod';

const createCouponValidation = z.object({
  body: z.object({
    couponCode: z.string(),
    discount: z.number(),
  }),
});

export const couponValidations = {
  createCouponValidation,
};
