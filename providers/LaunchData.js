const axios = require("axios");

const baseUrl =
  "https://docs.spacexdata.com/#5fc4c846-c373-43df-a10a-e9faf80a8b0a";

exports.getLaunchData = async () => {
  let response = await axios.get(baseUrl + "/plaintext", {
    responseType: "text",
  });
  return response.data;
};
