require("dotenv").config();
require("express-async-errors");




const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const products = require("./routes/products");

const notFound = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>Products</a>");
});

app.use("/api/v1/products", products);

app.use(notFound);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(
        `App is listening on port ${port} and connecting to database!`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

start();
