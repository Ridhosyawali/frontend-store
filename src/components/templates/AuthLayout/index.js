import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
