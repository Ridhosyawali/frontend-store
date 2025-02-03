import Section from "@/components/atoms/Section";
import CardProduct from "@/components/molecules/CardSale";
import RadioButton from "@/components/molecules/RadioButton";
import { getProducts } from "@/services/products";
import React, { useState } from "react";

const WomensPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts =
    selectedCategory === ""
      ? data
      : data.filter((product) => product.category === selectedCategory);

  return (
    <>
      <Section className={"px-0 py-0"}>
        <div className="flex justify-center items-center bg-slate-600 text-white font-semibold h-20">
          <h1 className="text-xl">Product{"'"}s Page</h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 justify-self-center lg:gap-10 py-5">
          <RadioButton
            type={"radio"}
            id={"all"}
            name={"category"}
            value={""}
            onChange={handleCategoryChange}
            title={"All"}
          />
          <RadioButton
            type={"radio"}
            id={"women"}
            name={"category"}
            value={"women's clothing"}
            onChange={handleCategoryChange}
            title={"Women's Clothing"}
          />
          <RadioButton
            type={"radio"}
            name={"category"}
            id={"men"}
            value={"men's clothing"}
            onChange={handleCategoryChange}
            title={"Men's Clothing"}
          />
          <RadioButton
            type={"radio"}
            name={"category"}
            id={"electronics"}
            value={"electronics"}
            onChange={handleCategoryChange}
            title={"Electronics"}
          />
          <RadioButton
            type={"radio"}
            name={"category"}
            id={"jewelery"}
            value={"jewelery"}
            onChange={handleCategoryChange}
            title={"Jewelery"}
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:px-10 py-5 px-5">
          {filteredProducts.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header
                image={product.image}
                link={`/products/${product.id}`}
              />
              <CardProduct.Body
                title={product.title}
                link={`/products/${product.id}`}
                desc={product.description}
              />
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          ))}
        </div>
      </Section>
    </>
  );
};

export default WomensPage;

export async function getStaticProps() {
  try {
    const products = await getProducts();

    return {
      props: {
        data: products || [],
      },
    };
  } catch (error) {
    console.log("Failed to fetch products :", error);
  }
}
