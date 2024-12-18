/*
  - types of streams.
  - read - write - duplex - transform
*/


const {createReadStream, createWriteStream, write} = require("fs")

const readStream = createReadStream("./Data/file.txt")

const wirteStream = createWriteStream("./Data/output.txt")


readStream.pipe(wirteStream);