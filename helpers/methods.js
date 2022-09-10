const { response } = require("express");
const nodemailer = require("nodemailer")
/**
 *
 * @param {*} message
 * @param {*} payload
 * @returns
 */
exports.successResponse = (message, payload) => {
  return {
    status: true,
    message: message,
    package: payload,
  };
};

/**
 *
 * @param message
 * @param payload
 * @returns {{message, status: boolean}}
 */
exports.failResponse = (message, payload = null) => {
  let response = {
    status: false,
    message: message,
  };

  if (payload) {
    response.payload = payload;
  }

  return response;
};

/**
 *
 * @param {*} digit
 * @param {*} limit
 * @returns
 */
exports.RandomNumber = (digit, limit) => {
  return Math.floor(Math.random() * digit + limit);
};


exports.mailTransporter = async () => {
    return await nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USERNAME, // generated ethereal user
            pass: process.env.MAIL_PASSWORD // generated ethereal password
        }
    })
}

exports.notifyEmail = async (
    emailText,
    emailSubject,
    data,
) => {
  let transporter = await this.mailTransporter()
    try {
            await transporter.sendMail({
                from: `<${process.env.MAIL_FROM_ADDRESS}>`,
                to: data.email,
                subject: emailSubject,
                html: emailText
            })
            return true
        } catch (e) {
            return false
        }
   
}


