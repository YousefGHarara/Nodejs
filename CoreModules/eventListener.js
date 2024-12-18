const http = require("http")

const server = http.createServer();

// event listener
// best brackts calling event listener before server.listen()
server.on("listening", () => {
  console.log("Server is Listening now !!");
})

server.listen(4060)