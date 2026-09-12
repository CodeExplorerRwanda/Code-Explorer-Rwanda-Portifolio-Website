import nodemailer from "nodemailer";
import express from "express";

const route = express();

const createEmailTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.APP_PASS
        }
    });
};

route.post('/sendEmail', async (req, res) => {
    const {email, subject, message} = req.body;

    const transporter = createEmailTransporter();

    const mailOptions = {
        from: `${email}`,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: message
    };
    
    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        return false;
    }
}
);

route.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});