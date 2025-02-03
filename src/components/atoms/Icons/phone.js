import Link from "next/link";
import React from "react";
import { MdOutlinePhoneAndroid } from "react-icons/md";
const PhoneIcon = () => {
  return (
    <div className="lg:w-[100px] ">
      <Link
        href="/products"
        className="flex flex-col gap-2 justify-center items-center  "
      >
        <MdOutlinePhoneAndroid className="lg:text-5xl text-3xl text-[#ff8219]" />
        <span className="lg:text-sm text-xs font-semibold text-center">
          Pulsa & Paket Data
        </span>
      </Link>
    </div>
  );
};

export default PhoneIcon;
