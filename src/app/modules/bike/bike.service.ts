/* eslint-disable @typescript-eslint/no-explicit-any */
import { TBike } from './bike.interface';
import { Bike } from './bike.model';

const createBikesIntoDB = async (payload: TBike) => {
  const result = await Bike.create(payload);
  return result;
};

const getAllBikesFromDB = async (query: Record<string, unknown>) => {
  const { search = '', brand, model } = query;

  const filter = {} as any;
  if (search) filter.name = { $regex: search, $options: 'i' };
  if (brand) filter.brand = { $regex: brand, $options: 'i' };
  if (brand) filter.model = { $regex: model, $options: 'i' };

  const result = await Bike.find(filter);
  return result;
};

const getSingleBikeFromDB = async (id: string) => {
  const result = await Bike.findById(id);
  return result;
};

const updateBikeIntoDB = async (id: string, payload: Partial<TBike>) => {
  const result = await Bike.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const updateRating = async (id: string) => {
  const result = await Bike.findByIdAndUpdate(
    id,
    { $inc: { rating: 1 } },
    {
      new: true,
    },
  );
  return result;
};

const deleteBikeFromDB = async (id: string) => {
  const result = await Bike.findByIdAndUpdate(
    id,
    { isAvailable: false },
    { new: true },
  );
  return result;
};

export const BikeServices = {
  createBikesIntoDB,
  getAllBikesFromDB,
  getSingleBikeFromDB,
  updateBikeIntoDB,
  deleteBikeFromDB,
  updateRating,
};
