const { Complaint } = require("../../models");

const { complaintFilters } = require("./functions");

const { PubSub, withFilter } = require("graphql-subscriptions");

const pubsub = new PubSub();

const resolvers = {
  Query: {
    complaint: (_, { input }) => {
      return Complaint.findOne(input);
    },
    allComplaints: (_, { filter }) => {
      let query = filter ? { $or: complaintFilters(filter) } : {};
      return Complaint.find(query).sort({ createdAt: -1 });
    }
  },
  Complaint: {},
  Subscription: {},
  Mutation: {
    createComplaint: (_, { input }) => {
      let complaint = new Complaint({
        ...input
      });

      complaint.save();

      return complaint.toObject();
    }
  }
};

module.exports = resolvers;
