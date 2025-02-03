import ElectricIcon from "@/components/atoms/Icons/electric";
import GameIcon from "@/components/atoms/Icons/gaming";
import LightIcon from "@/components/atoms/Icons/light";
import MenuIcon from "@/components/atoms/Icons/menu";
import MoneyIcon from "@/components/atoms/Icons/money";
import PhoneIcon from "@/components/atoms/Icons/phone";
import PlaneIcon from "@/components/atoms/Icons/plane";
import WaterIcon from "@/components/atoms/Icons/water";
import Section from "@/components/atoms/Section";
import Banner from "@/components/molecules/BannerSlide";
import { CardCoverflow } from "@/components/molecules/CardCoverflow";
import CardProduct from "@/components/molecules/CardSale";
import CardSlide from "@/components/molecules/CardSlide";
import { BannerUrl } from "@/constant/BannerUrl";
import { getProducts } from "@/services/products";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { GoMoveToTop } from "react-icons/go";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import { useRouter } from "next/compat/router";
import FoodIcon from "@/components/atoms/Icons/food";
export default function Home({ data }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const banner = BannerUrl;

  const router = useRouter();
  const ref = useRef();

  const sliceProduct = data.slice(0, 10);
  const sliceProduct1 = data.slice(12, 18);

  useEffect(() => {
    function handleScroll() {
      const footerTop = ref.current?.offsetTop ?? 0;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition + viewportHeight >= footerTop) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      {/* Banner Icon */}
      <Section className={"lg:px-10"}>
        <div className="flex flex-col lg:py-5">
          <div className="w-full">
            <Banner preview={1}>
              {banner.map((item) => (
                <SwiperSlide key={item.id}>
                  <Image
                    src={item.url}
                    alt="banner"
                    className="w-full"
                    width={1000}
                    height={1000}
                  />
                </SwiperSlide>
              ))}
            </Banner>
          </div>
          <div className="py-5 px-5 w-full mx-auto grid grid-cols-4 lg:grid-cols-8 gap-5 items-top justify-items-center">
            <PhoneIcon />
            <MoneyIcon />
            <LightIcon />
            <GameIcon />
            <WaterIcon />
            <PlaneIcon />
            <FoodIcon />
            <MenuIcon />
          </div>
        </div>
      </Section>

      {/* flash sale */}
      <Section className={"bg-[#f4f4f4] lg:px-10 py-5 px-5"}>
        <div className="flex flex-col lg:flex-row lg:py-5 w-full  px-2">
          <div className="lg:w-[30%] flex flex-col p-4 gap-2">
            <div className="flex flex-row items-center">
              <div className="bg-white w-fit  rounded-full">
                <ElectricIcon
                  className={"text-[#ff8219] p-2 text-4xl lg:text-5xl"}
                />
              </div>
              <span className="lg:text-2xl text-xl font-semibold ml-2">
                Flash Sale
              </span>
            </div>
            <p className="lg:text-xl font-[900] opacity-85">Ends in 02:20:00</p>
          </div>
          <div className="lg:w-[70%] w-full">
            <div className="lg:flex hidden justify-end">
              <Link
                href={"/products"}
                className="text-sm px-2 pb-1 hover:text-blue-500"
              >
                Lihat Semua +
              </Link>
            </div>
            <CardSlide preview={3}>
              {sliceProduct.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardProduct>
                    <CardProduct.Header
                      image={item.image}
                      link={`/products/${item.id}`}
                    />
                    <CardProduct.Body
                      title={item.title}
                      link={`/products/${item.id}`}
                    />
                    <CardProduct.Footer price={item.price} />
                  </CardProduct>
                </SwiperSlide>
              ))}
            </CardSlide>
          </div>
        </div>
      </Section>

      {/* Galeri */}
      <Section className={"bg-white"}>
        <div className="flex lg:flex-row lg:py-5 w-full px-2 items-center">
          <div className="lg:w-[30%] flex flex-col p-4 gap-5">
            <span className="lg:text-2xl font-semibold">
              Let{"'"}s see our gallery
            </span>
            <Button
              onClick={() => router.push("/products")}
              className="lg:text-lg text-sm bg-blue-600 w-fit px-5 py-2 text-white rounded-md"
            >
              All Products
            </Button>
          </div>
          <div className="lg:w-[70%] p-4 mx-auto" ref={ref}>
            <CardCoverflow>
              {sliceProduct1.map((item) => (
                <SwiperSlide key={item.id}>
                  <Image
                    width={500}
                    height={500}
                    alt="product"
                    src={item.image}
                    className="aspect-square lg:h-[300px] object-contain "
                  />
                </SwiperSlide>
              ))}
            </CardCoverflow>
          </div>
        </div>
      </Section>

      {showBackToTop && (
        <div
          onClick={handleBackToTop}
          className="fixed bottom-20 right-5 bg-gradient-hover p-2 rounded-full bg-slate-200 cursor-pointer"
        >
          <GoMoveToTop className="text-xl" />
        </div>
      )}
    </>
  );
}

export async function getServerSideProps() {
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
