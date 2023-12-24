import React from "react";
import aboutImage from "@/assets/images/about-us.jpg";

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <img
        src={aboutImage}
        alt="About"
        className="w-full md:w-1/2 lg:w-1/3 rounded shadow-lg mb-6"
      />
      <p className="text-lg">
        We are a team of passionate software engineers who believe in the power
        of technology to transform lives. Our mission is to create innovative
        and user-friendly software solutions that empower individuals and
        businesses to achieve their goals.
      </p>
    </div>
  );
};

export default About;
