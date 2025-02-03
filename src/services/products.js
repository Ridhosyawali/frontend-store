import axios from "axios";

const API = process.env.NEXT_PUBLIC_API;

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API}/products`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products :", error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products :", error);
  }
};
