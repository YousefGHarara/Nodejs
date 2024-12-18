

// const sum = (a, b) => {
  //   return a + b;
  // }

const divisionOps = require("./division");

  
  // const multiply = (a, b) => {
    //   return a * b;
    // } 
    
  // insted you can imports this operation from files

  // const sum = require("./sum")

  // const multiply = require("./multiply")
  
  module.exports = {
    sum : require("./sum"),
    multiply: require("./multiply"),
    // divisionOps.division
    divisionOps: require("./division"),
    iRemainder: require('./division').remainder
  }; 