import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const getUserFromDB = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const updateUserMeFromDB = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getUserFromDB,
  updateUserMeFromDB,
};
