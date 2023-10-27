import Seo from "@/components/Seo";
import Head from "next/head";
import React from "react";

const About = ({ title }) => {
  return (
    <div>
      <Seo title="About" />
      <h1>About us</h1>
    </div>
  );
};

export default About;
