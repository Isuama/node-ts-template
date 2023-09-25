// src/services/SmsService.ts

import axios from "axios";
import { AuthService } from "./AuthService";

const config = process.env;

export class SmsService {
  static async sendSms(message: string) {
    try {
      //Get credentials from env vars
      const username = config.SMS_USERNAME as string;
      const password = config.SMS_PASSWORD as string;

      //Get the authentication token using user credentials.
      const token = await AuthService.getUserToken(username, password);

      // Prepare the SMS data with the token and message.
      const smsData = { token, message };

      // Make an HTTP request to the SMS provider's API to send the message.
      const response = await axios.post(config.SMS_PROVIDER_URL as string, smsData);

      //Handle the SMS provider's response, e.g., check for success and log it.

      return response.data;
    } catch (error) {
      // Handle errors, log them, and throw exceptions as needed.
      console.error("Failed to send SMS:", error);
      throw new Error("Failed to send SMS");
    }
  }
}
