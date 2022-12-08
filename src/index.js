import  express  from "express";
import {getcoin} from "./controller.js";
import mongoose from "mongoose";
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://akashgMDB:1q2w3e4r5T@cluster0.hwdbknn.mongodb.net/crypto_Project",
    { useNewUrlParser: true }
  )

  .then(() => console.log("MongoDB Is Connected"))
  .catch((err) => console.log(err));


app.use(express.Router().get('/cryptoCoins' , getcoin))


app.listen(process.env.PORT || 3000, function () {
  console.log("express app running on port" + (process.env.PORT || 3000));
});





// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const route = require("./routes/route");

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose
//   .connect(
//     "mongodb+srv://gauravdhiman123:hiFunctionUp@gd-cluster.kufg7lx.mongodb.net/group14Database",
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB Is Connected"))
//   .catch((err) => console.log(err));

// app.use("/", route);

// app.listen(process.env.PORT || 3000, function () {
//   console.log("express app running on port" + (process.env.PORT || 3000));
// });
