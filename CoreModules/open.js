const {open, readFile} = require("fs");

open("./Data/file.txt", (err, fd) => {
  if(err) {
    console.log(err);
  }
  
  readFile(fd, "utf-8", (err, data) => {
    if(err) {
      console.log(err);
      return
    }
    console.log(data);
  })
})