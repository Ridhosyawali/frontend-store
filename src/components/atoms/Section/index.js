import React from "react";

const Section = ({ className, children = "lg:px-10 px-5 py-5" }) => {
  return <section className={`${className} `}>{children}</section>;
};

export default Section;
