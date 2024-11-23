const authorController = require("../controller/authorController");

const router = require("express").Router();

//Add author

router.post("/", authorController.addAuthor);

//Get all authors

router.get("/", authorController.getAllAuthors);

//get an author

router.get("/:id", authorController.getAnAuthor);

//update author

router.put("/:id", authorController.updateAuthor);

//delete author
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
