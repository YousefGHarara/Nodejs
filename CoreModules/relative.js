// const story = require("./Data/file.txt");

// console.log(story);

const { readFile } = require("fs");

readFile("./Data/file.txt", 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
