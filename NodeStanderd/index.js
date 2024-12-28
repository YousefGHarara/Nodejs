const express = require("express")
const http = require("http")

const app = express()

app.get("/", (req, res, next) =>  {
  res.json({
    message: "Hello !"
  })
})

app.get("/dashboard", (req, res, next) => {
  res.json({
    page: "dashboard"
  })
})

const server = http.createServer(app);


server.listen(5000, () => {
  console.log("Server is running . . .!");
})