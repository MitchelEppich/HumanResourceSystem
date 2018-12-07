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
    ...ComplaintResolvers.Mutation
  }
};

module.exports = resolvers;
