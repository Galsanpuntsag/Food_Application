import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "bgalsaa20@gmail.com",
    pass: "vthvqshofmpowwdy",
  },
});

export const sendEmail = async (email: string, otp: string) => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: generateTemplate(otp), // html body
  });
};

const generateTemplate = (otp: string) => {
  return `
          <div>
          <h1>Hello ${otp}</h1>
          <h1>Welcome to our platform</h1> 
          </div>
          `;
};
