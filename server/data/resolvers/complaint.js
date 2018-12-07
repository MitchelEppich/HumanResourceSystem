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
        ...input,
        status: "Awaiting"
      });

      complaint.save();

      return complaint.toObject();
    },
    updateComplaint: async (_, { input }) => {
      let complaint;
      try {
        let operation = {
          $set: { ...input }
        };

        if (input.note != null) {
          operation["$push"] = { notes: input.note };
        }
        complaint = await Complaint.findOneAndUpdate(
          { $or: [{ _id: input._id }] },
          operation,
          { new: true }
        );

        return complaint.toObject();
      } catch (error) {
        console.log("No complaint was found -> ", input);
        return null;
      }
    }
  }
};

module.exports = resolvers;
