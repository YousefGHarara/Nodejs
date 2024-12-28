const express = require("express");
const middleware = require("./Middlewares");
const routes = require("./Routes")
const createError = require("http-errors")

const app = express();

process.on("unhandledRejection", (reason) => {
  console.log(reason);
  process.exit(1);
})

middleware(app);
routes(app);


// Page not found !
app.use((req, res, next) => {
  const error = createError(404, "Page not Found !");
  next(error);
})


// Error Handler
app.use((error, req, res, next) => {
  res.status(error.statusCode).json({
    status: false,
    message: error.message
  })
  console.log("Error Object !!");
})


module.exports = app;
