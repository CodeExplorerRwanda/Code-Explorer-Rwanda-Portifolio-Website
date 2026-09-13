import nodemailer from "nodemailer";
import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const route = express();
route.use(express.json());
route.use(cors({
    origin: process.env.FRONTEND_API
}))

const createEmailTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.APP_PASS
        }
    });
};

route.get('/', async(req, res) => {
    return res.status(200).json({ message: 'Welcome to code explorer rwanda backend'})
})
route.post('/sendEmail', async (req, res) => {
    const {email, subject, message } = req.body;
    console.log(email, subject, message)

    const transporter = createEmailTransporter();

    const mailOptions = {
        from: `${email}`,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: message
    };
    
    try {
         await transporter.sendMail(mailOptions);
         return res.status(200).json({ message: 'Your message sent successfully!'});
    } catch (error) {
       return res.status(500).json({ error: 'Your message sent successfully!'});
    }
}
);

route.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});