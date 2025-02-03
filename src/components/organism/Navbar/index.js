import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import Link from "next/link";
import { useRouter } from "next/compat/router";
import React, { useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { setUsername } from "@/redux/username/username";
import { getCurrentUser } from "@/services/auth";
import { useDispatch, useSelector } from "react-redux";
import useSignOut from "@/hooks/useSignOut";

const Navbar = () => {
  const { signOut } = useSignOut();
  const router = useRouter();

  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.username);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(setUsername(getCurrentUser(token)));
    }
  }, [username]);
  return (
    <nav className="px-5 lg:px-10 py-2 top-0 z-50 sticky shadow-lg flex flex-row justify-between items-center bg-white">
      <div>
        <Logo />
      </div>

      <div className="flex flex-row gap-5 items-center">
        {username ? (
          <>
            <Link href={"/cart"}>
              <FaCartShopping className="lg:text-xl hover:text-slate-500" />
            </Link>
            <div className="flex flex-col items-center gap-2">
              <span className="font-semibold text-xs lg:text-[14px]">
                Hai, {username}
              </span>
              <Button
                type={"button"}
                onClick={signOut}
                className={" hover:underline lg:text-[14px] text-xs"}
              >
                Sign Out
              </Button>
            </div>
          </>
        ) : (
          <Button
            type={"button"}
            onClick={() => router.push("/login")}
            className={" hover:underline"}
          >
            Sign In
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
