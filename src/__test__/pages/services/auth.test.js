import { login } from "@/services/auth";
import axios from "axios";

// Buat data tiruan yang dikirim ke API
jest.mock("axios");

describe("Login", () => {
  it("test fungsi login dengan payload yang sesuai", async () => {
    const payload = {
      username: "ridho",
      password: "ridho123",
    };

    await login(payload);

    expect(axios.post).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API}/auth/login`,
      payload
    );
  });
});
