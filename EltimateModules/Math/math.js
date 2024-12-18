

// const sum = (a, b) => {
  //   return a + b;
  // }
  
  // const multiply = (a, b) => {
    //   return a * b;
    // } 
    
  // insted you can imports this operation from files

const sum = require("./sum")

const multiply = require("./multiply")

module.exports = {sum, multiply}; 