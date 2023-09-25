import express from "express";
import smsRoutes from "./routes/smsRoutes";

const app = express();

// ...other middleware and configurations...

app.use(express.json());

app.use("/api/sms", smsRoutes);

export default app;
