const {Router} = require("express");
const { bookController } = require("../Controllers");


const router = Router();

router.get("/", bookController.getBook)
.get("/pages", bookController.getBookPageCount)
.get("/:id", bookController.getBookById)

module.exports = router