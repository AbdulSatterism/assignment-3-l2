import nodemailer from 'nodemailer';

// :TODO incomplete this task

export const sendEmail = async (
  email: string,
  message: string,
  name: string,
) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: 'mdabdulsatter12345@gmail.com',
      pass: 'utui fsba aggv dhoq',
    },
  });

  await transporter.sendMail({
    from: 'mdabdulsatter12345@gmail.com', // sender address
    to: email, // list of receivers
    subject: ` ${name} From Bike share`, // Subject line
    text: 'message', // plain text body
    html: message, // html body
  });
};
