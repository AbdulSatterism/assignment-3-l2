import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const getUserFromDB = async () => {
  const result = await User.findOne();
  return result;
};

const updateUserMeFromDB = async () => {
  const result = await User.findOneAndUpdate();
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getUserFromDB,
  updateUserMeFromDB,
};
