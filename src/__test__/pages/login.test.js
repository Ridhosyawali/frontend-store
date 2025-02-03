import LoginPage from "@/pages/login";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

describe("Login Page", () => {
  const store = configureStore({
    reducer: {},
  });

  it("render halaman login sesuai spesifikasi", () => {
    const page = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    expect(page).toMatchSnapshot();
  });
});
