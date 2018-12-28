const UserResolvers = require("./user");
const ComplaintResolvers = require("./complaint");

const User = UserResolvers.User;
const Complaint = ComplaintResolvers.Complaint;

const nodemailer = require("nodemailer");
const emailTemplates = require("../email");

const axios = require("axios");

const resolvers = {
  Query: {
    ...UserResolvers.Query,
    ...ComplaintResolvers.Query
  },
  ...User,
  ...Complaint,
  Subscription: {
    ...UserResolvers.Subscription,
    ...ComplaintResolvers.Subscription
  },
  Mutation: {
    ...UserResolvers.Mutation,
    ...ComplaintResolvers.Mutation,
    sendEmail: async (_, { input }) => {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "hrsystem.noreply@gmail.com",
          pass: "qzldkaopkrwuewji"
        }
      });

      let mailOptions;
      switch (input.type) {
        case "post":
          mailOptions = emailTemplates.actionPost({
            subject: "Your complaint has been received.",
            ...input
          });
          break;
        case "update":
          mailOptions = emailTemplates.actionUpdate({
            subject: "Your complaint has received an update.",
            ...input
          });
          break;
      }

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Email failed to send -> ", error);
          return;
        }
        console.log("Email sent.");
        return;
      });
    }
  }
};

module.exports = resolvers;
