import React from "react";
import Header from "@/layout/header";

const About = () => {
  return <div>About</div>;
};

export default About;

About.getLayout = (page) => {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
