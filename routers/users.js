const express = require("express");
const router = express.Router();

const {searchUser} = require("../controllers/users")

router.post("/searchUser",searchUser);

module.exports = router;