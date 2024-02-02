import nodemailer from "nodemailer";

interface IEmailProps {
  email: string;
  otp?: string;
  token?: string;
}

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

export const sendEmail = async ({ email, otp, token }: IEmailProps) => {
  const htmlTemplate = otp
    ? generateTemplate(otp as string)
    : generateLink(token as string);
  await transporter.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: htmlTemplate, // html body
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

const generateLink = (token: string) => {
  return `
    <div style="min-width:1000px; overflow:auto; line-height:2">
      <div style="margin:50px auto; width:70%; padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <h3 style="font-size:1.4em; color: #00466a; text-decoration:none; font-weight:600">Food Platform Inc</h3>
        </div>
        <p style="font-size:1.1em">Hello Dear,</p>
        <p>
          Thank you for choosing Your Brand. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes
        </p>
        <a href="http://localhost:8080/verify/useremail?token=${token}">
          <h2 style="background:#00466a; margin:0 auto; width:max-content; padding:0 10px;color:#fff; border-radius: 4px;">
            Verified link
          </h2>
        </a>
        <p style="font-size:0.9em;">Regards,<br />Food Platform Inc</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          <p>Food Platform Inc</p>
          <p>Global</p>
        </div>
      </div>
    </div> 
  `;
};
