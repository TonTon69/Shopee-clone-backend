const userRouter = require("./user");
const meRouter = require("./me");
const productsRouter = require("./products");
const siteRouter = require("./site");

function route(app) {
  app.use("/auth", userRouter);
  app.use("/me", meRouter);
  app.use("/products", productsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
