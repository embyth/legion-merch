const collections = require("../assets/collections");

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(collections),
  };
};
