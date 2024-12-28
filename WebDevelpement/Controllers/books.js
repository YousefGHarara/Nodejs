const { dbConnection } = require("../Configurations");
const { ObjectId } = require("bson");
const createError = require("http-errors")

const getBook = (req, res, next) => {
  const pageNum = parseInt(req.query.page);

  const limit = 2;

  const skip = (pageNum - 1) * limit;

  dbConnection("books", async (db) => {
    const books = await db.find({}).limit(limit).skip(skip).toArray();
    res.json(books);
  });
};

const getBookPageCount = (req, res, next) => {
  dbConnection("books", async (db) => {
    const limit = 2;
    const count = await db.count({});
    const pages = Math.ceil(count / limit); // 4 / 2
 
    res.json({
      pages: pages,
    });
  });
};

const getBookById = (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    const error = createError(400, "Id isn't valid");


    // res.status(error.statusCode).json({
    //   status: false,
    //   message: error.message,
    // });
    next(error)
  }

  const _id = new ObjectId(req.params.id);

  dbConnection("books", async (db) => {
    try {
      const book = await db.findOne({ _id: _id });

      if (!book) {
        const error = createError(404, "not Found (New) !");
        // res.status(error.statusCode).json({
        //   message: error.message,
        // });
        next(error)
      }

      res.json(book);
    } catch (err) {
      const error = createError(501, "Not Found Book (New) !");
      // res.status(error.statusCode).json({
      //   err: error.message,
      // });
      next(error)
    }
  });
};

module.exports = {
  getBook,
  getBookPageCount,
  getBookById,
};
