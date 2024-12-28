const studentRouter = require("./student");
const bookRouter = require("./books")
const authRouter = require("./auth")

module.exports = (app) => {

  // app.get("/home", (req, res, next) => {
  //   res.send("<h1>Woo nodejs</h1>"); // return html code
  // });

  // app.get("/", (req, res, next) => {
  //   res.redirect("/home");
  // });

  app.get("/products/:id", (req, res, next) => {
    // console.log(req.query);
    // console.log(req.headers);
    // console.log(lang);

    const id = req.params.id;

    const jsonData = [
      { id: 1, name: "lenovo", price: 3000 },
      { id: 2, name: "Acer", price: 2400 },
    ];

    const product = jsonData.find((data) => data.id == id);

    res.status(200).json(product);
  });

  app.use("/student", studentRouter);

  app.use("/books", bookRouter);

  app.use("/auth", authRouter)
};
