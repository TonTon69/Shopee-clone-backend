const Product = require("../models/Product");

const { mongooseToObject } = require("../../util/mongoose");

class ProductController {
  // [GET] /products/:slug
  show(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((product) =>
        res.render("products/show", {
          product: mongooseToObject(product),
        })
      )
      .catch(next);
  }
  create(req, res, next) {
    res.render("products/create");
  }
  store(req, res, next) {
    const product = new Product(req.body);
    product.save().then(() => res.redirect("/"));
  }
}
module.exports = new ProductController();
