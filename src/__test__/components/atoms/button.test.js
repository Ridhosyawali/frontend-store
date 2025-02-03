import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/atoms/Button";

describe("Button", () => {
  it("Rende halaman button dengan children yang sesuai", () => {
    // getByText : fungsinya untuk mengambil elemen dengan text tertentu
    const { getByText } = render(<Button>Login</Button>);

    // toBeInTheDocument : untuk memastikan elemen tersebut ada di dalam DOM virtual / didalam dokumennya
    expect(getByText("Login")).toBeInTheDocument();
  });

  it("render button dengan warna biru", () => {
    // render dulu komponentnya
    const { getByText } = render(
      <Button className={"bg-blue-500"}>Login</Button>
    );
    // tamping komponen yang dirender ke variabel button
    const button = getByText("Login").closest("button");
    // closest digungakan untuk mengambil element terdekat dengan tag tertentu
    expect(button.className).toContain("bg-blue-500");
  });

  it("render button dengan lebar full", () => {
    // render dulu komponentnya
    const { getByText } = render(<Button className={"w-full"}>Login</Button>);
    // tamping komponen yang dirender ke variabel button
    const button = getByText("Login").closest("button");
    // closest digungakan untuk mengambil element terdekat dengan tag tertentu

    // toContain : digunakan untuk memastikan element pmempunyai class tsb
    expect(button.className).toContain("w-full");
  });

  it("render button dengan type tertentu", () => {
    const { getByText } = render(<Button type={"submit"}>Login</Button>);
    const button = getByText("Login").closest("button");
    expect(button.type).toBe("submit");
  });

  it("Test Fungsi onClick pada button ketika di click", () => {
    // jest.fn digunakan untuk meniru atau mock
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Login</Button>);

    const button = getByText("Login").closest("button");
    // fireEvent ini berfungsi untuk mensimulasikan event handler di suatu halaman
    fireEvent.click(button);

    // toHaveBeenCalledTimes berfungsi untuk memastikan fungsi tsb dipanggil sebanyak 1x
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
