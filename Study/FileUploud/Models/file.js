const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();
const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

fileSchema.post("save", async function (doc) {
  try {
    console.log("Your Data is Show here", doc);
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER, // generated ethereal user
        pass: process.env.MAIL_PASS, // generated ethereal password
      },
    });
    let info = await transporter.sendMail({
      from: "TechNodes", // sender address
      to: doc.email, // list of receivers
      subject: "Completed Backend With Learning these things", // Subject line
      html: `
    <h2>Thank you for Sending the Data!</h2>

    <p>Dear ${doc.email},</p>

    <p>Thank you for sending us the data. We appreciate your cooperation and contribution. Your submission will help us achieve our goals in learning these things.</p>

    <p>If you have any further information or questions, please don't hesitate to reach out to us. We value your input and look forward to working with you.</p>

    <p>Best regards,<br>Your Name</p>
  `,
    });
  } catch (err) {
    console.error(err);
  }
});
const File = mongoose.model("File", fileSchema);
module.exports = File;
