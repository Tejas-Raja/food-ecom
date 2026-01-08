import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://tejas:database@cluster0.qevp9mw.mongodb.net/food-del').then(() => console.log("DB connected"));
}