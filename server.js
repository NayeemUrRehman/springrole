const express = require("express");
const port = 7000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongooseURI =
  "mongodb+srv://nayeem:example123@cluster0.9nfon.mongodb.net/ecommerce?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || mongooseURI;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const routes = require("./routes");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  routes(app);
  console.log(`Example app listening at http://localhost:${port}`);
});