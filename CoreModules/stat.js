const {stat} = require("fs");


stat("./Data/file.txt", (err, state) => {
  if(err) {
    console.log(err);
    return
  }
  console.log(state);
})