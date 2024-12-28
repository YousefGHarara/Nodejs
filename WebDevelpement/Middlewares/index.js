const express = require("express");
const createError = require("http-errors")

module.exports = (app) => {
  // app.use((req, res, next) => {
  //   // middleware (pre-condition)

  //   const lang = req.query.lang;
  //   if (lang && (lang == "en" || lang == "ar")) {
  //     next();
  //   } else {
  //     res.status(400).json({
  //       message: "lang is require !",
  //     });
  //   }
  // });

  app.use((req, res, next) => {
    console.log("the second middlewar");
    next();
  });

  // app.use((req, res, next) => {
  //   console.log("Hangging mmmmmmmmmmm");
  //   next(createError(505, "Woow"));
  //   return;
  //   console.log("Hangging Next 1");
  //   console.log("Hangging Next 2");
  //   console.log("Hangging Next 3");
  // })

  // to solve - errors in body parser
  app.use(express.json())
};
