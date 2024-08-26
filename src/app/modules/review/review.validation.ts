import { z } from 'zod';

const createReviewValidation = z.object({
  body: z.object({
    customerName: z.string(),
    description: z.string(),
    email: z.string(),
  }),
});

export const reviewValidations = {
  createReviewValidation,
};
