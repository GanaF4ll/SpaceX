const express = require("express");
const router = express.Router();

const launchController = require("../controllers/LaunchController");

router
  .route("/launches/:mission_id/launches")
  .get(launchController.listAllLaunches)
  .get(launchController.getALaunch);

module.exports = router;