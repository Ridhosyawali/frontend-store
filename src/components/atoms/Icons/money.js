import Link from "next/link";
import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
const MoneyIcon = () => {
  return (
    <div className="lg:w-[100px]  ">
      <Link
        href="/products"
        className="flex flex-col gap-2 justify-center items-center "
      >
        <FaMoneyBillAlt className="lg:text-5xl text-3xl text-[#ef386a]" />
        <span className="lg:text-sm text-xs font-semibold text-center">
          Pembayaran
        </span>
      </Link>
    </div>
  );
};

export default MoneyIcon;
