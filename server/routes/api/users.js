let express = require("express");

let resolvers = require("../../data/resolvers");

let router = express.Router();

router.post("/", getUsers);
router.post("/verify", verifyUser);
router.post("/update", updateUser);

async function getUsers(req, res) {
  let _post = req.body;

  let _users = await resolvers.Query.allUsers(null, {});
  _users = _users.map(user => {
    return inferPermissions(user.toObject(), _post.CLIENT_ACR);
  });
  res.send(_users);
}

async function verifyUser(req, res) {
  let _post = req.body;
  let _user = await resolvers.Mutation.verifyCredentials(null, {
    input: {
      ..._post
    }
  });
  _user = inferPermissions(_user, _post.CLIENT_ACR);
  res.send(_user);
}

async function updateUser(req, res) {
  let _post = req.body;
  let _user = await resolvers.Mutation.updateUser(null, {
    input: {
      ..._post
    }
  });
  _user = inferPermissions(_user, _post.CLIENT_ACR);
  res.send(_user);
}

function inferPermissions(user, CLIENT_ACR) {
  let _new = user;

  let _permissions =
    _new.permissions != null && _new.permissions.length != 0
      ? _new.permissions
          .filter(a => {
            if (a.includes(CLIENT_ACR)) return true;
            return false;
          })[0]
          .split(":")
      : [CLIENT_ACR, 0, 0];
  _new.admin = _permissions[1] == "1";
  _new.locked = _permissions[2] == "1";
  return _new;
}

module.exports = router;
