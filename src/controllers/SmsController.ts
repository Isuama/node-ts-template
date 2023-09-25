// src/controllers/SmsController.ts

import { Request, Response } from "express";
import { SmsService } from "../services/SmsService";

export class SmsController {
  static async sendSms(req: Request, res: Response) {
    try {
      const message = req.body.message;

      if (!message) {
        return res.status(400).json({ message: "Invalid request data" });
      }

      await SmsService.sendSms(message);

      res.status(200).json({ message: "SMS sent successfully" });
    } catch (error) {
      console.error("Failed to send SMS:", error);
      res.status(500).json({ message: "Failed to send SMS" });
    }
  }
}
