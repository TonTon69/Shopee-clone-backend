const userRouter = require("./auth");
const siteRouter = require("./site");

function route(app) {
  app.use("/auth", userRouter);
  app.use("/", siteRouter);
}

module.exports = route;
