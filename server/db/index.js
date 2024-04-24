import mongoose from "mongoose";

export default async (_nitroApp) => {
 try {
   mongoose.set("strictQuery", true);  // 嚴格模式
   await mongoose.connect(
     "mongodb+srv://Easyfun:qorwjj3AQBhBZFSY@rti.ubrv7ph.mongodb.net/rti"
   );
   console.log("連接 MongoDB");
 } catch (e) {
   console.error("Error MongoDB =>", e);
 }
};
