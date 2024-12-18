const http = require("http");

const dataCollectingError = true;

if(dataCollectingError) {
  process.exit(1); // End this process cus you have a error project
  process.exit(0); // End this process cus you endedsucess
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/": {
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello Node JS</title>
        </head>
        <body>
          
        <h1>Woow this is a header </h1>
        </body>
        </html>
            `);
      break;
    }

    case "/home": {
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Home Node JS</title>
        </head>
        <body>
          
        <h2>Home Page</h2>
        <h1>Woow this is a header </h1>
        </body>
        </html>
            `);
      break;
    }
    default: {
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Home Node JS</title>
        </head>
        <body>
          
        <h2>Page Not Found </h2>
        </body>
        </html>
            `);
    }
  }
});
const PORT = "3030";

server.listen(PORT, () => {
  console.log(`Hello Port.${PORT}`);
});
