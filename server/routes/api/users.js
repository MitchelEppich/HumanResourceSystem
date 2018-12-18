let express = require("express");

let resolvers = require("../../data/resolvers");

let router = express.Router();

router.get("/", getUsers);
router.post("/verify", verifyUser);
router.post("/update", updateUser);

async function getUsers(req, res) {
  let _users = await resolvers.Query.allUsers(null, {});
  res.send(_users);
}

async function verifyUser(req, res) {
  let _post = req.body;
  let _user = await resolvers.Mutation.verifyCredentials(null, {
    input: {
      ..._post
    }
  });
  res.send(_user);
}

async function updateUser(req, res) {
  let _post = req.body;
  let _user = await resolvers.Mutation.updateUser(null, {
    input: {
      ..._post
    }
  });
  res.send(_user);
}

module.exports = router;
