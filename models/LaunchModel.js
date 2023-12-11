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
    first_stage: {
      cores: [
        {
          core_serial: {
            type: String,
          },
          flight: {
            type: String,
          },
          block: null,
          gridfins: {
            type: Boolean,
          },
          legs: {
            type: Boolean,
          },
          reused: {
            type: Boolean,
          },
          land_success: null,
          landing_intent: {
            type: Boolean,
          },
          landing_type: null,
          landing_vehicle: null,
        },
      ],
    },
    second_stage: {
      block: {
        type: String,
      },
      payloads: [
        {
          payload_id: {
            type: String,
          },

          norad_id: {
            type: String,
          },
          reused: {
            type: Boolean,
          },
          customers: {
            type: String,
          },
          nationality: {
            type: String,
          },
          manufacturer: {
            type: String,
          },
          payload_type: {
            type: String,
          },
          payload_mass_kg: {
            type: String,
          },
          payload_mass_lbs: {
            type: String,
          },
          orbit: {
            type: String,
          },
          orbit_params: {
            reference_system: {
              type: String,
            },
            regime: {
              type: String,
            },
            longitude: null,
            semi_major_axis_km: null,
            eccentricity: null,
            periapsis_km: {
              type: String,
            },
            apoapsis_km: {
              type: String,
            },
            inclination_deg: {
              type: String,
            },
            period_min: {
              type: String,
            },
            lifespan_years: {
              type: String,
            },
            epoch: null,
            mean_motion: null,
            raan: null,
            arg_of_pericenter: null,
            mean_anomaly: null,
          },
        },
      ],
    },
    fairings: {
      reused: {
        type: Boolean,
      },
      recovery_attempt: {
        type: Boolean,
      },
      recovered: {
        type: Boolean,
      },
      ship: null,
    },
  },
  ships: [],
  telemetry: {
    flight_club: null,
  },
  launch_site: {
    site_id: {
      type: String,
    },
    site_name: {
      type: String,
    },
    site_name_long: {
      type: String,
    },
  },
  launch_success: {
    type: Boolean,
  },
  launch_failure_details: {
    time: {
      type: String,
    },
    altitude: null,
    reason: {
      type: String,
    },
  },
  links: {
    mission_patch: {
      type: String,
    },
    mission_patch_small: {
      type: String,
    },
    reddit_campaign: null,
    reddit_launch: null,
    reddit_recovery: null,
    reddit_media: null,
    presskit: null,
    article_link: {
      type: String,
    },
    wikipedia: {
      type: String,
    },
    video_link: {
      type: String,
    },
    youtube_id: {
      type: String,
    },
    flickr_images: {
      type: String,
    },
  },
  details: {
    type: String,
  },
  static_fire_date_utc: {
    type: Date,
  },
  static_fire_date_unix: {
    type: String,
  },
  timeline: {
    type: String,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
