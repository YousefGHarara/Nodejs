const { MongoClient } = require("mongodb");

const collection_name = "nodejs_project"
const _uri =
    `mongodb+srv://hrarty37:hero9sika999@cluster0.sldsg.mongodb.net/${collection_name}?retryWrites=true&w=majority&appName=Cluster0`;

const dbConnection = (collection, cb) => {

  
  MongoClient.connect(_uri)
  .then(async (client) => {
    const db = client.db(collection_name).collection(collection)
    await cb(db);
    client.close();
  })
  .catch((err) => console.log(err))

}

// dbConnection("employees", async (db) => {
//   const employee = await db.findOne();
//   console.log(employee);
// });

module.exports = dbConnection;