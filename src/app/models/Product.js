const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    price_old: { type: String },
    price_new: { type: String },
    origin: { type: String },
    brand: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
