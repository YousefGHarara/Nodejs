
// Event Emitter -> class
const {EventEmitter} = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greeting", () => {
  console.log("Welcome to my Anime app");
})

myEmitter.on("greeting", (name) => {
  console.log(`Hello Mr.${name}`);
})

// working a async but a child in thire executing a sorting
myEmitter.emit("greeting", "Yousef");