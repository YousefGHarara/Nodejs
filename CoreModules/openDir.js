const {opendir} = require('fs')


// this async function and dir is async value

opendir("../", async (err, dir) => {
  for await (let dirent of dir) {
    console.log(dirent.name);
  }
})
