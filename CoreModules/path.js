const { readFile } = require("fs");
const path = require("path")

const pathFile = __filename;

console.log(path.basename(pathFile));

console.log(path.extname(pathFile));

console.log(path.parse(pathFile));  

console.log(path.join("./Data", "file.txt"));

readFile(path.join(__dirname, "Data", "file.txt"), "utf-8", (err, data) => {
  console.log(data);
})