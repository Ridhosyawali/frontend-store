import Button from "@/components/atoms/Button";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-between lg:px-10 py-5 px-5 lg:p-4 bg-slate-700 text-white">
        <div className="flex flex-col gap-2">
          <div className="lg:flex">
            <Button className="">Bergabung dengan kami</Button>
          </div>
          <div className="flex gap-2 text-lg lg:items-center">
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="lg:text-2xl" />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="lg:text-2xl" />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="lg:text-2xl" />
            </Link>
            <Link
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="lg:text-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-right gap-1">
          <span className="lg:text-[14px] text-xs">Email: venim@email.com</span>
          <span className="lg:text-[14px] text-xs">Telepon: 0123-456-789</span>
          <span className="lg:text-[14px] text-xs">
            Alamat: Jl. Sukasuka No.123, Jakarta
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
