import Link from "next/link";
import React from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
const WaterIcon = () => {
  return (
    <div className=" lg:w-[100px] ">
      <Link
        href="/products"
        className="flex flex-col gap-2 justify-center items-center "
      >
        <MdOutlineWaterDrop className="lg:text-5xl text-3xl text-[#292f36]" />
        <span className="lg:text-sm text-xs font-semibold text-center">
          PDAM
        </span>
      </Link>
    </div>
  );
};

export default WaterIcon;
