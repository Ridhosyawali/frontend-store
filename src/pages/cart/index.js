import Button from "@/components/atoms/Button";
import Section from "@/components/atoms/Section";
import { formatCurrency } from "@/helpers/utils/formatCurrency";
import { getProducts } from "@/services/products";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const CartPage = ({ data }) => {
  const [cart, setCart] = useState([]);

  const calculateTotal = useCallback(() => {
    return cart.reduce((total, item) => {
      const product = data.find((product) => product.id === item.id);
      return total + product.price * item.qty;
    }, 0);
  }, [cart, data]);

  const subTotal = calculateTotal();

  const Total = useMemo(() => {
    const tax = subTotal * 0.12;
    return subTotal + tax;
  }, [subTotal]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  return (
    <Section className={"py-5"}>
      <h1 className="text-2xl font-bold lg:px-12">Cart</h1>
      <div className="flex flex-col lg:flex-row">
        {cart > 0 ? (
          <div className="flex flex-col px-10 w-[60%] gap-2">
            {cart.map((item) => {
              const datas = data?.find((data) => data.id === item.id);
              return (
                <div key={item.id} className="flex p-4 border rounded-lg">
                  <Image
                    className="rounded object-contain aspect-auto h-12 w-12"
                    width={100}
                    height={100}
                    src={datas?.image}
                    alt="cart image"
                  />
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col justify-between ml-3">
                      <span className="font-bold text-md line-clamp-1">
                        {datas?.title}
                      </span>
                      <span className="font-semibold">Rp. {datas?.price}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span className="mb-1">Qty</span>
                      <span className="flex justify-center items-center font-semibold p-2 border rounded-sm text-center w-10 h-10">
                        {item?.qty}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col px-10 w-[60%] gap-2">
            <div className="flex flex-col font-bold text-slate-800 p-4 border rounded-lg">
              <span className="mb-1 text-xl">Keranjang anda kosong</span>
            </div>
          </div>
        )}
        <div className="flex px-10 lg:w-[40%] sticky right-0">
          <div className="flex flex-col w-full p-4 border rounded-lg gap-2">
            <div className="flex flex-row justify-between w-full">
              <span>SubTotal</span>
              <span>{formatCurrency(subTotal, "en-US", "USD")}</span>
            </div>
            <div className="flex flex-row justify-between w-full">
              <span>Pajak</span>
              <span>{formatCurrency(subTotal * 0.12, "en-US", "USD")}</span>
            </div>
            <hr className="my-2 border-black" />
            <div className="flex font-semibold flex-row justify-between w-full">
              <span>Total</span>
              <span>{formatCurrency(Total, "en-US", "USD")}</span>
            </div>
            <Button className="mt-4 bg-blue-700 rounded-xl py-1 px-3 text-white hover:bg-blue-800">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CartPage;

export async function getServerSideProps() {
  try {
    const products = await getProducts();

    return {
      props: {
        data: products || [],
      },
    };
  } catch (error) {
    console.log("Failed to fetch products :", error);
    return {
      props: {
        error,
      },
    };
  }
}
