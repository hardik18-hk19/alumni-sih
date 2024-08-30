import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://mesatyamchas2205:la8cKpOwixhovNUI@cluster0.56g0cq7.mongodb.net/alumni";
  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Website database connected successfully"))
    .catch((err) =>
      console.log(`Getting error from db connection ${err.message}`)
    );
};

export default connectToDB;
