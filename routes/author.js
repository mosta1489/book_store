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
router.post("/", async (req, res) => {
  const author = new Author({
    name: req.body.name,
  });
  try {
    const newAuthor = await author.save();
    // res.redirect(`authors/${newAuthor.id}`);
    res.redirect(`authors`);
  } catch {
    res.render("authors/new", {
      author: author,
      errorMassage: "Error creating Author",
    });
  }
});

module.exports = router;
