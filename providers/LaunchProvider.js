const axios = require("axios");

const baseUrl = "https://api.spacexdata.com/v3/launches";

exports.getLaunches = async () => {
  let response = await axios.get(baseUrl + "/plaintext", {
    responseType: "text",
  });
  return response.data;
};
