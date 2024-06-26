import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
};
export default connect;
