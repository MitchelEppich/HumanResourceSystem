const mongoose = require("mongoose");

const UserSchema = require("./user");
const ComplaintSchema = require("./complaint");

const User = mongoose.model("User", UserSchema);
const Complaint = mongoose.model("Complaint", ComplaintSchema);

exports.User = User;
exports.Complaint = Complaint;
