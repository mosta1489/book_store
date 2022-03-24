const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("test page");
});

module.exports = router;
