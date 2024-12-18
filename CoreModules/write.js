const { writeFile, open } = require("fs");

open("./Data/file.txt", "a", (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }

  writeFile(
    fd,
    `Hi there,
My name is yousef, i love web developement ⚔️Ha, Where are you going ??`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
});
