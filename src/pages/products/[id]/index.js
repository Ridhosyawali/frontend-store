import Button from "@/components/atoms/Button";
import Section from "@/components/atoms/Section";
import { formatCurrency } from "@/helpers/utils/formatCurrency";
import useAddToCart from "@/hooks/useAddToCart";
import { getProductById, getProducts } from "@/services/products";
import Image from "next/image";
import { useRouter } from "next/compat/router";
import React, { useEffect, useState } from "react";

const ProductDetailPage = ({ detailProduct, data }) => {
  const router = useRouter();

  const { addToCart, cart, setCart } = useAddToCart();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCart]);
  return (
    <Section>
      <div className="flex flex-col gap-10 lg:flex-row lg:px-20 lg:py-10">
        <div className="lg:w-[50%] py-5">
          <Image
            src={detailProduct?.image}
            alt={"image"}
            width={500}
            height={500}
            className="lg:h-[450px] h-[300px] object-contain object-center lg:shadow-lg rounded-md"
          />
        </div>
        <div className="lg:w-[50%] flex flex-col px-5 ">
          <div className="mb-5">
            <h1>{detailProduct?.title}</h1>
            <span className="text-slate-500">{detailProduct?.category}</span>
            <p className="font-bold my-3">
              {formatCurrency(detailProduct?.price, "en-US", "USD")}
            </p>
          </div>
          <Button
            type="button"
            onClick={() => addToCart(detailProduct)}
            className="py-4 px-3 mb-2 bg-black rounded-3xl text-white hover:bg-gray-800"
          >
            Tambahkan ke keranjang
          </Button>
          <Button
            type="button"
            className="py-4 px-3  rounded-3xl font-semibold border-gray-400 border-2 hover:border-black  "
          >
            Favorit
          </Button>
          <p className="mt-5">{detailProduct?.description}</p>
          <div className="flex justify-start  py-5">
            <Button
              onClick={() => router.back()}
              className="underline mt-5 font-semibold hover:text-red-700 px-0"
            >
              {"<-- "}Kembali
            </Button>
          </div>
        </div>
        {cart.length > 0 && (
          <div className="lg:w-[30%] px-5 py-5">
            <h1 className="text-xl font-bold text-slate-800 mb-4 uppercase">
              Cart
            </h1>
            <div className="flex flex-col gap-2 max-h-80 overflow-y-scroll">
              {cart.map((item) => {
                const datas = data.find((data) => data.id === item.id);
                return (
                  <div key={item.id} className="flex p-4 border rounded-lg">
                    <Image
                      className="rounded object-contain aspect-auto h-12 w-12"
                      width={100}
                      height={100}
                      src={datas.image}
                      alt="cart image"
                    />
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col justify-between ml-3">
                        <span className="font-bold text-md line-clamp-1">
                          {datas.title}
                        </span>
                        <span className="font-semibold">
                          {formatCurrency(datas.price, "en-US", "USD")}
                        </span>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="mb-1">Qty</span>
                        <span className="flex justify-center items-center font-semibold p-2 border rounded-sm text-center w-10 h-10">
                          {item.qty}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default ProductDetailPage;

export async function getServerSideProps(context) {
  //   console.log("ini isi context :", context.query.id);

  const id = context.query.id;

  try {
    const detailProduct = await getProductById(id);
    const data = await getProducts();

    //validasi kalo misal data tidak ditemukan kembalikan 404

    return {
      props: { detailProduct, data },
    };
  } catch (error) {
    console.log(error);

    return {
      props: { error },
    };
  }
}
