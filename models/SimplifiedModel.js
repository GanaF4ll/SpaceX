const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let commentSchema = new Schema({
  flight_number: 1,
  mission_name: {
    type: String,
    required: {
      type: Boolean,
    },
  },
  mission_id: {
    type: String,
  },
  upcoming: {
    type: Boolean,
  },
  launch_year: {
    type: Date,
    default: Date.now,
  },
  launch_date_unix: {
    type: Datetime,
    default: Date.now,
  },
  launch_date_utc: {
    type: Datetime,
    default: Date.now,
  },
  launch_date_local: {
    type: Datetime,
    default: Date.now,
  },
  is_tentative: {
    type: Boolean,
  },
  tentative_max_precision: "hour",
  tbd: {
    type: Boolean,
  },
  launch_window: 0,
  rocket: {
    rocket_id: {
      type: String,
    },
    rocket_name: {
      type: String,
    },
    rocket_type: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Comment", commentSchema);
