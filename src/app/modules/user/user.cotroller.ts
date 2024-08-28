import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

const allUser = catchAsync(async (req, res) => {
  const result = await UserServices.allUserFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
});

const getUser = catchAsync(async (req, res) => {
  const { userId } = req.user;
  const result = await UserServices.getUserFromDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
});

const updateUserMe = catchAsync(async (req, res) => {
  const { userId } = req.user;
  const result = await UserServices.updateUserMeFromDB(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const updateUserOnlyAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.updateUserMeFromDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.deleteUserFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});

const toggleRole = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.toggleRoleInDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user role updated',
    data: result,
  });
});

export const UserController = {
  createUser,
  allUser,
  getUser,
  updateUserMe,
  toggleRole,
  deleteUser,
  updateUserOnlyAdmin,
};
