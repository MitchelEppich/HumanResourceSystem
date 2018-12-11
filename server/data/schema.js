const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query {
  user(input: UserInput!): User
  allUsers(filter: UserFilter): [User]!
  complaint(input: ComplaintInput!): Complaint
  allComplaints(filter: ComplaintFilter): [Complaint]!
}

input UserFilter {
  OR: [UserFilter!]
  is_admin: Boolean
}

input ComplaintFilter {
  OR: [ComplaintFilter!]
  status: String
}

type User {
  _id: String
  username: String
  badge: String
  name: String
  jobTitle: [String]
  permissions: [String]
  reportsTo: String
  startingDate: String
  endingDate: String
  phone: String
  email: String
  jobDescription: String
  adminNotes: String
  token: String
  createdAt: String
  online: String
  lastAction: String
}

input UserInput {
  _id: String
  username: String
  badge: String
  name: String
  jobTitle: [String]
  permissions: [String]
  reportsTo: String
  startingDate: String
  endingDate: String
  phone: String
  email: String
  jobDescription: String
  adminNotes: String
  token: String
  createdAt: String
  online: String
  lastAction: String
}

type Complaint {
  _id: String
  name: String
  email: String
  status: String
  fileDate: String
  closeDate: String
  incidentDate : String
  incidentTime : String
  incidentLocation : String
  incidentDescription : String
  reportedNames: [String]
  witnessNames: [String]
  additionalInfo: String
  proposedAction: String
  adminResponse: String
  notes: [String]
  anonymous: Boolean
}

input ComplaintInput {
  _id: String
  name: String
  email: String
  status: String
  fileDate: String
  closeDate: String
  incidentDate : String
  incidentTime : String
  incidentLocation : String
  incidentDescription : String
  reportedNames: [String]
  witnessNames: [String]
  adminResponse: String
  note: String
  notes: [String]
  additionalInfo: String
  proposedAction: String
  anonymous: Boolean
}

type Subscription {
  userUpdate: User
  complaintUpdate: Complaint
}

type Mutation {
  verifyCredentials(input: UserInput!): User
  registerCredentials(input: UserInput!): User
  updateUser(input: UserInput!): User
  deleteUser(input: UserInput!): User

  createComplaint(input: ComplaintInput!): Complaint
  updateComplaint(input: ComplaintInput!): Complaint
  deleteComplaint(input: ComplaintInput!): Complaint
}

`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
