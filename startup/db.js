import mongoose from "mongoose";
import logger from "./logger/index";
const port = process.env.MONGO_PORT || 27017;

module.exports = function () {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log(`Connected to MongoDB on port ${port}`);
    })
    .catch(() => {
      console.log("Fail to connect to mongoDB");
    });
};
