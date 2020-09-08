const userRouter = require("./user");
const siteRouter = require("./site");

function route(app) {
  app.use("/auth", userRouter);
  app.use("/", siteRouter);
}

module.exports = route;
