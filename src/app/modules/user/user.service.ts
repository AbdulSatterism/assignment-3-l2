import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const allUserFromDB = async () => {
  const result = await User.find();
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

const updateUserOnlyAdmin = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteUserFromDB = async (id: string) => {
  const result = await User.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

const toggleRoleInDB = async (id: string) => {
  const user = await User.findById(id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }

  // Toggle the role
  const result = await User.findByIdAndUpdate(
    id,
    { role: user.role === 'admin' ? 'user' : 'admin' },
    { new: true },
  );
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getUserFromDB,
  updateUserMeFromDB,
  allUserFromDB,
  toggleRoleInDB,
  deleteUserFromDB,
  updateUserOnlyAdmin,
};
