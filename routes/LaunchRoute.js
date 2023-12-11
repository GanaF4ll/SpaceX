const express = require("express");
const router = express.Router();

const launchController = require("../controllers/LaunchController");

router.route("/").get(launchController.listAllLaunches);

// router.route("/launches/:mission_id/launch").get(launchController.getALaunch);

module.exports = router;
