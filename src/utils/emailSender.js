const nodemailer = require('nodemailer');
const { customLogger } = require("./logger");
require("dotenv").config();

// SEND EMAIL //
let successCount = 0, failureCount = 0;
let sentStatus = {}
const sendMail = async (to = "", subject = "", text = "") => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: to,
            subject: subject,
            text: text
        };

        transporter.sendMail(mailOptions, async function (error, info) {
            if (error) {
                sentStatus[to] = "failed"
                failureCount = failureCount + 1
                console.log(error);
                reject("failed")
            } else {
                sentStatus[to] = "sent"
                successCount = successCount + 1
                console.log('Email sent: ' + info.response);
                resolve("success")
            }
            customLogger.log('info', `Success Email Count: ${successCount}`);
            customLogger.log('info', `Failure Email Count: ${failureCount}`);
        });
        // return {successCount,failureCount,sentStatus}
    })
}

module.exports = { sendMail }

