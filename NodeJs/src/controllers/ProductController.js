const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;
    const products = await Product.paginate({}, { page, limit: 10 });
    return response.json(products);
  },

  async show(request, response) {
    const product = await Product.findById(request.params.id);
    return response.json(product);
  },

  async store(request, response) {
    // Criação
    const product = await Product.create(request.body);
    return response.json(product);
  },

  async update(request, response) {
    const product = await Product.findOneAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    return response.json(product);
  },
  async destroy(request, response) {
    await Product.findOneAndDelete(request.params.id);
    return response.send("Deletado");
  },
};
