let express = require("express");

let usersRoutes = require("./users");

let router = express.Router();

router.use("/user", usersRoutes);

module.exports = router;
