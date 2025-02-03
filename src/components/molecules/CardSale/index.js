import Button from "@/components/atoms/Button";
import { formatCurrency } from "@/helpers/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/** Nested component : funginya untuk menjadi wadah untuk beberapa komponen anak(header, body, footer)
 * komponen ini akan jadi komponen pembungkus
 */

const CardProduct = ({ children, className }) => {
  return (
    <>
      <div className="rounded-md shadow-lg p-1">
        <div className={`w-full max-w-xs bg-white rounded-lg ${className}`}>
          {children}
        </div>
      </div>
    </>
  );
};

function Header({ image, link = "#", className }) {
  return (
    <Link href={link}>
      <Image
        src={image}
        alt={image}
        className={`rounded-t-lg p-4 w-full aspect-square object-contain object-center ${className}`}
        width={250}
        height={250}
      />
    </Link>
  );
}

function Body({ title, desc, link = "#" }) {
  return (
    <div className="px-3 pb-1">
      <Link href={link}>
        <h3 className="text-lg text-black line-clamp-2 h-14 hover:underline">
          {title}
        </h3>
        <p className="mt-3 text-slate-700 text-base text-justify line-clamp-3">
          {desc}
        </p>
      </Link>
    </div>
  );
}

function Footer({ price }) {
  return (
    <div className="flex flex-col px-3 pb-5 mt-auto w-full">
      <span className="lg:text-xl font-bold mb-2">
        {formatCurrency(price, "en-US", "USD")}
      </span>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
