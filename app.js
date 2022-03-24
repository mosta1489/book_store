if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

// ------------ connceting to data base ------------
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("data base is connected");
});

// -------------------------------------------------
// ------------------require routers ------------

const indexRouter = require("./routes/index");
const autourRouter = require("./routes/author");

//---------------------------------------

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

// -------------- use routers ----------------------

app.use("/", indexRouter);
app.use("/authors", autourRouter);

// -------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
