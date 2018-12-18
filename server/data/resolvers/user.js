const { User, Log } = require("../../models");

const { userFilters } = require("./functions");

const { PubSub, withFilter } = require("graphql-subscriptions");

const pubsub = new PubSub();

const axios = require("axios");

const resolvers = {
  Query: {
    user: async (_, { input }) => {
      let _user = await User.findOne(input);
      if (_user == null) return null;
      if (_user["online"] == null) _user["online"] = true;
      else _user["online"] = !_user["online"];
      _user.save();
      return _user;
    },
    allUsers: async (_, { filter }) => {
      let query = filter ? { $or: userFilters(filter) } : {};
      let users = await User.find(query);

      // let _index = 0;
      // for (let user of users) {
      //   let _log = await Log.findOne({ who: user.username });
      //   if (_log != null) {
      //     user.lastAction = _log.task;
      //     users[_index] = user;
      //   }
      //   _index++;
      // }
      return users;
    }
  },
  User: {},
  Subscription: {
    userUpdate: {
      subscribe: withFilter(
        () => pubsub.asyncIterator("userUpdate"),
        (payload, variables) => {
          console.log(payload, variables);
          return true;
        }
      )
    }
  },
  Mutation: {
    verifyCredentials: async (_, { input }) => {
      // console.log(input);
      let user = await User.findOne({
        badge: input.badge
      });

      if (user == null) return;
      if (user.username.toLowerCase() != input.username.toLowerCase()) return;

      user.token = user.createToken();

      user.online = true;
      // user.lastAction = await Log.findOne({ who: user.username });

      pubsub.publish("userUpdate", {
        userUpdate: { ...user.toObject() }
      });

      user.save();

      return user.toObject();
    },
    registerCredentials: async (_, { input }) => {
      let name = input.name;
      let _break = name.toLowerCase().split(" ");
      let username = _break[0][0] + _break[1];
      let badge;
      let user;
      do {
        badge = `${Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, "")
          .substr(0, 5)}`;
        user = await User.findOne({ badge: badge });
      } while (user != null);

      user = new User({
        username: username,
        ...input,
        badge: badge
      });

      user.token = user.createToken();

      user.save();

      return user.toObject();
    },
    deleteUser: async (_, { input }) => {
      try {
        let _user = await User.findOne({ username: input.username });

        _user.remove();

        return _user.toObject();
      } catch (error) {
        console.log("No user was found -> ", input);
        return null;
      }
    },
    updateUser: async (_, { input }) => {
      let user;
      if (input.admin != null || input.locked != null) {
        user = await User.findOne({ username: input.username });
        input = modifyPermissions(user, input);
      }

      try {
        let operation = {
          $set: { ...input }
        };

        user = await User.findOneAndUpdate(
          { $or: [{ username: input.username }] },
          operation,
          { new: true }
        );

        pubsub.publish("userUpdate", {
          userUpdate: { ...user.toObject() }
        });

        postUserUpdate(user.toObject());

        return user.toObject();
      } catch (error) {
        console.log("No user was found -> ", input);
        return null;
      }
    }
  }
};

function modifyPermissions(user, input) {
  let _index = 0;
  for (let perm of user.permissions) {
    if (perm.includes(input.CLIENT_ACR)) {
      break;
    }
    _index++;
  }
  let _permissions = user.permissions;

  let _permBreak = _permissions[_index].split(":");

  _permissions[_index] = `${input.CLIENT_ACR}:${
    input.admin != null ? (input.admin == "true" ? 1 : 0) : _permBreak[1]
  }:${input.locked != null ? (input.locked == "true" ? 1 : 0) : _permBreak[2]}`;

  return { permissions: _permissions, ...input };
}

const postUserUpdate = user => {
  let config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  let body = toUrlEncoded({ userUpdate: JSON.stringify(user) });

  axios.post("http://localhost:3001/user/update", body, config).then(res => {
    console.log("Successfully updated client...");
  });
};

const toUrlEncoded = obj =>
  Object.keys(obj)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
    .join("&");

module.exports = resolvers;
