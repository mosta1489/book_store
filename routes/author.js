const router = require("express").Router();
const Author = require("../models/authorModel");
// All Authors Route
router.get("/", (req, res) => {
  res.render("authors/index");
});

// New Authors Route
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

// Create Authors Route
router.post("/", (req, res) => {
  const author = new Author({
    name: req.body.name,
  });
  author.save((err, newAuthor) => {
    if (err) {
      res.render("authors/new", {
        author: author,
        errorMassage: "Error creating Author",
      });
    } else {
      // res.redirect(`authors/${newAuthor.id}`);
      res.redirect(`authors`);
    }
  });
});

module.exports = router;
