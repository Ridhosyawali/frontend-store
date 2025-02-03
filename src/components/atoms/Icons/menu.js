import Link from "next/link";
import React from "react";
import { RxDashboard } from "react-icons/rx";
const MenuIcon = () => {
  return (
    <div className=" lg:w-[100px] ">
      <Link
        href="/products"
        className="flex flex-col  gap-2 justify-center items-center"
      >
        <RxDashboard className="lg:text-5xl text-3xl text-[#292f36]" />
        <span className="lg:text-sm text-xs font-semibold text-center">
          Semua Menu
        </span>
      </Link>
    </div>
  );
};

export default MenuIcon;
