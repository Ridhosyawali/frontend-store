import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useAddToCart = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  const addToCart = (product) => {
    const token = localStorage.getItem("token");
    if (token) {
      const cartItem = {
        ...product,
        id: product.id,
        qty: 1,
      };
      const existingCart = cart.find((item) => item.id === cartItem.id);
      let updatedCart;
      if (existingCart) {
        updatedCart = cart.map((item) =>
          item.id === cartItem.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        updatedCart = [...cart, { ...cartItem }];
      }
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      router.push("/login");
    }
  };

  return { addToCart, cart, setCart };
};

export default useAddToCart;
