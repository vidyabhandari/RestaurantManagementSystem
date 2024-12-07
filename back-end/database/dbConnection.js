import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MyRestaurant",
    })
    .then(() => {
      console.log("Connected to database succesfully!");
    })
    .catch((err) => {
      console.log("Some error while connecting to database!");
    });
};
