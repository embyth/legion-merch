const collections = require("../assets/collections");

exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: JSON.stringify(collections),
  };
};
