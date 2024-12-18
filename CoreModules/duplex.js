/*
  - duplex is a socket like real time application (ex) chat app, calling between others
  - the different between socket & (request - response)
  * (request - response) : when you request you will receive a response and end the connection (2 sides)
  - (ex) sms - login
  * Socket : meeting in 2 or more people no end before you end the connection (1 side)
  - (ex) calling - chat
 */


const {createServer} = require("http")

const server = createServer();

server.listen(5000);

server.on("connection", (socket) => {
  console.log(socket);
})