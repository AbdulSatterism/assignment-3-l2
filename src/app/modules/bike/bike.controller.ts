import { BikeServices } from './bike.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createBike = catchAsync(async (req, res) => {
  const result = await BikeServices.createBikesIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'bike added successfully',
    data: result,
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const result = await BikeServices.getAllBikesFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bikes retrieved successfully',
    data: result,
  });
});

const getSingleBike = catchAsync(async (req, res) => {
  const result = await BikeServices.getSingleBikeFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get single successfully',
    data: result,
  });
});

const updateBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BikeServices.updateBikeIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike updated successfully',
    data: result,
  });
});

const updateRating = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BikeServices.updateRating(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rating update',
    data: result,
  });
});

const deleteBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BikeServices.deleteBikeFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike deleted successfully',
    data: result,
  });
});

export const BikeControllers = {
  createBike,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike,
  updateRating,
};
