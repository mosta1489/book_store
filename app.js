const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

// ------------------require routers ------------

const indexRouter = require("./routes/index");

//---------------------------------------

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

// -------------- use routers ----------------------

app.use("/", indexRouter);

// -------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
