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

// exports.getALaunch = async (req, res) => {
//   try {
//     const Launch = await Launch.findById(req.params.rocket_id);

//     if (Launch) {
//       res.status(200);
//       res.json(Launch);
//     } else {
//       res.status(204);
//       console.log(error);
//       res.json({ message: "Launch not found" });
//     }
//   } catch (error) {
//     res.status(500);
//     console.log(error);
//     res.json({ message: "Erreur serveur" });
//   }
// };
