
const math = require("./Math/math")
const sum1 = require("./Math/sum")

// here like a index file to html
// insted you can remove file name
const iMath = require("./Math")

const {sum, iRemainder} = require("./Math")

console.log(sum1(1, 2));
console.log(math.multiply(9, 2));

console.log(iMath.sum(100, 200));


console.log(sum(900, 90));

console.log(iMath.divisionOps.division(100, 10));

console.log(iRemainder(101, 100));