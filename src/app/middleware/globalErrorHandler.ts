/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';

const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next,
) => {
  return res.status(500).json({
    success: false,
    message: 'Something went wrong',
  });
};

export default globalErrorHandler;
