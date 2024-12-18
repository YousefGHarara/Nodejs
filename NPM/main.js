

const path = require("path");

const fs = require("fs")
const util = require("util")
const http = require("http")

// console.log("Syn clg");
// process.nextTick(() => console.log("Next Tick 2"))

// setTimeout(() => {
//   console.log("time out !");
//   process.nextTick(() => console.log("process nextTick"))
// }, 0);
// setImmediate(() => console.log("set immediate !"))

/////////////////////////////////////

// console.log("Start");

// Promise.resolve()
// .then(() => console.log("Promise !"))

// console.log("End");

///////////////////////

// console.log(path.join("user", "local", "bin"));

/////////////////////////////

// var x = 10;

// function hi () {
//   var x = 20;
//   console.log(x);
// }

// hi();
// console.log(x);

////////////////////////////////////


// const readFile = util.promisify(fs.readFile);
// readFile("exmpale.txt", "utf-8")
// .then((data) => console.log(data))

////////////////////////


// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(2000).then(() => console.log("Delayed !"))

//////////////////////


// setTimeout(() => {
//   console.log("Time out");
// }, 0);

// setImmediate(() => console.log("Immediate"))

// process.nextTick(() => console.log("process nextTick"))


/////////////////


// setImmediate(() => {
//   console.log("Immediate 1 !");
//   process.nextTick(() => {
//     console.log("Next Tick inside immediate !");
//   })
// })

// process.nextTick(() => console.log("Next Tick 1 !"))

// setTimeout(() => {
//   console.log("Time out");
// }, 0);

// setImmediate(() => console.log("Immediate 2 !"))



/*
next tick 1
time out
immediate 1 !
Next tick inside immediate
immedaite 2 !
*/


///////////////////////


// const server = http.createServer((req, res) => {
//   res.end("hi")
//   res.write("hello, world !")
// })

// server.listen(3000)

//////////////////////////


// setImmediate(() => {
//   console.log("Immediate 1 !");
// })

// setTimeout(() => {
//   console.log("time out !");
// }, 0);

// setImmediate(() => {
//   console.log("Immediate 2 !");
// })


// process.nextTick(() => {
//   console.log("next Tick !");
// })

//////////////////////////////

// const counter = require("./counter")

// counter.count += 1;

// console.log(counter);