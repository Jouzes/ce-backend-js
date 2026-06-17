import "dotenv/config";
import mongoose from "mongoose";

export async function conectaBD() {
  if (!process.env.MONGO_URL) {
    throw new Error("A variável de ambiente MONGO_URL não foi definida.");
  }

  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB conectado!");
}
