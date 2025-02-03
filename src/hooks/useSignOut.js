import { setUsername } from "@/redux/username/username";
import { useRouter } from "next/compat/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useSignOut = () => {
  const [isSignedOut, setIsSignedOut] = useState(false);
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.username);

  const router = useRouter();
  const signOut = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
      router.push("/login");
      dispatch(setUsername(""));
      setIsSignedOut(true);
    } catch (error) {
      console.error(error);
    }
  };

  return { signOut, isSignedOut };
};

export default useSignOut;
