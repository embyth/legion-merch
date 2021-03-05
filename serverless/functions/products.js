const products = require("../assets/products");

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};
