const products = require("../assets/products");

exports.handler = async (event) => {
  const {id} = event.queryStringParameters;
  console.log(event);
  if (id) {
    const item = products.find((product) => product.id === id);

    return {
      statusCode: 200,
      body: JSON.stringify(item),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};
