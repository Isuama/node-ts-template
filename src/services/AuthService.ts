import axios from "axios";
const config = process.env;

export class AuthService {
  static async getUserToken(username: string, password: string): Promise<string> {
    try {
      // Make an HTTP request to authentication service to obtain the token.
      const authResponse = await axios.post(config.AUTH_SERVICE_URL as string, { username, password });

      if (authResponse.status === 200 && authResponse.data.token) {
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
