require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const db = require("./db");

const usersRouter = require("./routes/user");

db();

//built in middlewares => parsen req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello WDG#010");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
