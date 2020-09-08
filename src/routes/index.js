const userRouter = require("./user");
const productsRouter = require("./products");
const siteRouter = require("./site");

function route(app) {
  app.use("/auth", userRouter);
  app.use("/products", productsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
