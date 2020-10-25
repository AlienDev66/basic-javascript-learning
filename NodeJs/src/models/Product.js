const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);
