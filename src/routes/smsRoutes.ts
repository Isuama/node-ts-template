// src/routes/smsRoutes.ts

import express from "express";
import { SmsController } from "../controllers/SmsController";

const router = express.Router();

router.post("/send", SmsController.sendSms);

export default router;
