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