const {readFile, readFileSync} = require("fs")

readFile("./Data/file.txt", "utf-8", (err, data) => {
  if(err) {
    console.log(err);
    return;
  }

  console.log("Async File : ", data);
})

const content = readFileSync("./Data/file.txt", 'utf-8');


console.log("Sync File : " , content);
console.log("-".repeat(20));
