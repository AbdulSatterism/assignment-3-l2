import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { sendEmail } from './catact.utils';
// import nodemailer from 'nodemailer';

// // Configure the NodeMailer transport
// const sendEmail = async (email: string, message: string,name:string) => {
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: 'production', // Use `true` for port 465, `false` for all other ports
//       auth: {
//         user: 'mdabdulsatter12345@gmail.com',
//         pass: 'utui fsba aggv dhoq',
//       },
//     });

//     await transporter.sendMail({
//       from: 'mdabdulsatter12345@gmail.com', // sender address
//       to, // list of receivers
//       subject: 'Reset your password within 10m', // Subject line
//       text: '', // plain text body
//       html, // html body
//     });
//   };

const createContact = catchAsync(async (req, res) => {
  const { name, email, message } = req.body;

  await sendEmail(email, message, name);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'mail sent successfully',
    data: {},
  });
});

export const contact = {
  createContact,
};
