import Link from "next/link";
import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
const PlaneIcon = () => {
  return (
    <div className=" lg:w-[100px] ">
      <Link
        href="/products"
        className="flex flex-col gap-2 justify-center items-center "
      >
        <FaPlaneDeparture className="lg:text-5xl text-3xl text-[#ff8219]" />
        <span className="lg:text-sm text-xs font-semibold text-center">
          Tiket Perjalanan
        </span>
      </Link>
    </div>
  );
};

export default PlaneIcon;
