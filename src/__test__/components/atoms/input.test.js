import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "@/components/atoms/Input";

describe("Input", () => {
  it("render input dengan place holder yang sesuai", () => {
    const { getByPlaceholderText } = render(<Input placeholder={"Username"} />);
    // getByPlaceholderText digunakan untuk mengakses elemen dengan placeholder tertentu
    const input = getByPlaceholderText("Username");
    expect(input.placeholder).toBe("Username");
  });

  it("test fungsi onChange pada elemen input", () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder={"Username"} onChange={onChange} />
    );
    const input = getByPlaceholderText("Username");
    fireEvent.change(input, { target: { value: "danu" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
