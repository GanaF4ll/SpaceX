const Launch = require("../models/LaunchModel");
const LaunchApi = require("../providers/LaunchProvider");

exports.listAllLaunches = async (req, res) => {
  try {
    const Launches = await Launch.find({});
    res.status(200);
    res.json(Launches);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: "Erreur serveur" });
  }
};
