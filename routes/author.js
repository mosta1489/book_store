const router = require("express").Router();
const Author = require("../models/authorModel");
// All Authors Route
router.get("/", async (req, res) => {
  let serchOptions = {};
  if (req.query != null && req.query.name != "") {
    serchOptions.name = new RegExp(req.query.name, "i");
    // serchOptions.name = `/${req.query.name}/i`;
    console.log(serchOptions);
  }

  try {
    const authors = await Author.find(serchOptions);
    res.render("authors/index", {
      authors: authors,
      serchOptions: req.query,
    });
  } catch {
    res.redirect("/");
  }
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
