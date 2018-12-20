const UserResolvers = require("./User");
const ComplaintResolvers = require("./Complaint");

const User = UserResolvers.User;
const Complaint = ComplaintResolvers.Complaint;

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
          pass: "hrnremail."
        }
      });

      let mailOptions;
      // switch (input.type) {
      //   case "welcome":
      //     mailOptions = emailTemplates.welcome({
      //       ...input,
      //       username: (await UserResolvers.Query.user(_, {
      //         email: input.email
      //       })).username,
      //       url: url
      //     });
      //     break;
      //   case "passwordReset":
      //     mailOptions = emailTemplates.passwordReset({
      //       ...input,
      //       username: (await UserResolvers.Query.user(_, {
      //         email: input.email
      //       })).username,
      //       url: url
      //     });
      //     break;
      // }

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          // nothing
        }
      });
    }
  }
};

module.exports = resolvers;
