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
  name: String
  badge: String
  locked: Boolean
  token: String
  admin: Boolean
  online: Boolean
  createdAt: String
  lastAction: String
}

input UserInput {
  id: String
  username: String
  name: String
  badge: String
  locked: Boolean
  token: String
  admin: Boolean
  online: Boolean
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
  anonymous: Boolean
}

input ComplaintInput {
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
  anonymous: Boolean
}

type Subscription {
  userUpdate: User
}

type Mutation {
  verifyCredentials(input: UserInput!): User
  registerCredentials(input: UserInput!): User
  updateUser(input: UserInput!): User

  createComplaint(input: ComplaintInput!): Complaint
}

`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
