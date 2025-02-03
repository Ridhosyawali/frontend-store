import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center">
        <span className="lg:text-3xl text-xl font-bold mr-1">JOKS</span>
        <div className="flex flex-col translate-y-1">
          <span className="text-xs self-end">store</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
