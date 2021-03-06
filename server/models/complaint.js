const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ComplaintSchema = Schema({
  name: String,
  email: String,
  fileDate: { type: Date, default: new Date() },
  closeDate: Date,
  incidentDate: Date,
  incidentTime: String,
  incidentLocation: String,
  incidentDescription: String,
  reportedNames: [String],
  witnessNames: [String],
  additionalInfo: String,
  proposedAction: String,
  status: String,
  adminResponses: [String],
  notes: [String],
  anonymous: { type: Boolean, default: false }
});

module.exports = ComplaintSchema;
