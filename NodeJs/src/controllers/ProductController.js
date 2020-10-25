const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(require, response) {
    const products = await Product.find();
    return response.json(products);
  },

  async store(require, response) {
    // Criação
    const product = await Product.create(require.body);

    return response.json(product);
  },
};
