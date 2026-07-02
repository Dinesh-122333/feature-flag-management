import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/featureRoutes.js";


// import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/feature", router);

export default app;