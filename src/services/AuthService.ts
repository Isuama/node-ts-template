import axios from "axios";
import https from "https";
import crypto from "crypto";

const config = process.env;

export class AuthService {
  static async getUserToken(username: string, password: string): Promise<string> {
    try {
      const agent = new https.Agent({ rejectUnauthorized: false, secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT });
      const axiosInstance = axios.create({ httpsAgent: agent });

      const url = config.AUTH_SERVICE_URL as string;
      const data = {
        username: config.SMS_USERNAME as string,
        password: config.SMS_PASSWORD as string,
        tokenAsJson: true,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      const timeoutInMilliseconds = 30000;

      // Make an HTTP request to authentication service to obtain the token.
      console.log("about to call and get token", url, data, headers, timeoutInMilliseconds);
      const authResponse = await axiosInstance.post(url, data, {
        headers,
        timeout: timeoutInMilliseconds,
      });

      if (authResponse.status === 200 && authResponse.data.token) {
        console.log("token is:", authResponse.data);
        return authResponse.data.token;
      } else {
        throw new Error("Invalid authentication response");
      }
    } catch (error) {
      // Handle authentication errors and throw exceptions.
      console.error("Authentication failed:", error);
      throw new Error("Authentication failed");
    }
  }
}
