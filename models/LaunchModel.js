const mongoose = require("mongoose");

// Définir le schéma du modèle
const launchSchema = new mongoose.Schema({
  flight_id: { type: String, required: true },
  flight_number: { type: Number, required: true },
  launch_year: { type: Number, required: true },
  launch_date_utc: { type: Date, required: true },
  launch_date_local: { type: Date, required: true },
  tbd: { type: Boolean, default: false },
  rocket_id: { type: String, required: true },
  rocket_name: { type: String, required: true },
  rocket_type: { type: String, required: true },
  core_serial: { type: String },
  land_success: { type: Boolean, default: false },
  landing_intent: { type: Boolean, default: false },
  landing_type: { type: String },
  landing_vehicle: { type: String },
  cap_serial: { type: String },
  core_flight: { type: Number },
  block: { type: Number },
  gridfins: { type: Boolean, default: false },
  legs: { type: Boolean, default: false },
  core_reuse: { type: Boolean, default: false },
  capsule_reuse: { type: Boolean, default: false },
  fairings_reused: { type: Boolean, default: false },
  fairings_recovery_attempt: { type: Boolean, default: false },
  fairings_recovered: { type: Boolean, default: false },
  fairings_ship: { type: String },
  site_id: { type: String },
  site_name: { type: String },
  payload_id: { type: String },
  norad_id: { type: Number },
  customer: { type: String },
  nationality: { type: String },
  manufacturer: { type: String },
  payload_type: { type: String },
  orbit: { type: String },
  reference_system: { type: String },
  regime: { type: String },
  longitude: { type: Number },
  semi_major_axis_km: { type: Number },
  eccentricity: { type: Number },
  periapsis_km: { type: Number },
  apoapsis_km: { type: Number },
  inclination_deg: { type: Number },
  period_min: { type: Number },
  lifespan_years: { type: Number },
  epoch: { type: Date },
  mean_motion: { type: Number },
  raan: { type: Number },
  launch_success: { type: Boolean, default: false },
});

// Créer le modèle à partir du schéma
const Launch = mongoose.model("Launch", launchSchema);

// Exporter le modèle
module.exports = Launch;
