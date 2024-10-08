import { z } from 'zod';

const createBikeValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    pricePerHour: z.number(),
    cc: z.number(),
    year: z.number(),
    model: z.string(),
    image: z.string(),
    brand: z.string(),
  }),
});

const updateBikeValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    pricePerHour: z.number().optional(),
    cc: z.number().optional(),
    year: z.number().optional(),
    model: z.string().optional(),
    image: z.string().optional(),
    brand: z.string().optional(),
  }),
});

export const bikeValidations = {
  createBikeValidationSchema,
  updateBikeValidationSchema,
};
