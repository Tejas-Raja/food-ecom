import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config
const app = express();
const PORT = 4000;

// Serve static files from the uploads directory
app.use('/images', express.static('uploads'));

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("API Working");
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
})

