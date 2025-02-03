import Link from "next/link";
import React from "react";
import { IoGameController } from "react-icons/io5";
const GameIcon = () => {
  return (
    <div className="lg:w-[100px] ">
      <Link
        href="/products"
        className="flex flex-col  gap-2 justify-center items-center"
      >
        <IoGameController className="lg:text-5xl text-3xl text-[#0c4189]" />
        <span className="lg:text-sm text-xs font-semibold text-center">
          Top Up Game
        </span>
      </Link>
    </div>
  );
};

export default GameIcon;
