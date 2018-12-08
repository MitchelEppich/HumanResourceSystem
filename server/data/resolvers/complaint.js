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
  Subscription: {
    complaintUpdate: {
      subscribe: withFilter(
        () => pubsub.asyncIterator("complaintUpdate"),
        (payload, variables) => {
          console.log(payload, variables);
          return true;
        }
      )
    }
  },
  Mutation: {
    createComplaint: (_, { input }) => {
      let complaint = new Complaint({
        ...input,
        status: "Awaiting"
      });

      complaint.save();

      pubsub.publish("complaintUpdate", {
        complaintUpdate: {
          ...complaint.toObject()
        }
      });

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

        pubsub.publish("complaintUpdate", {
          complaintUpdate: {
            ...complaint.toObject()
          }
        });

        return complaint.toObject();
      } catch (error) {
        console.log("No complaint was found -> ", input);
        return null;
      }
    },
    deleteComplaint: async (_, { input }) => {
      try {
        let _complaint = await Complaint.findOne({ _id: input._id });
        _complaint.remove();
        return _complaint.toObject();
      } catch (e) {
        console.log("No complaint found => ", input);
      }
    }
  }
};

module.exports = resolvers;
