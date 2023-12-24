import React from "react";
import teamImage from "@/assets/images/team.jpg";

const Team = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Our Team</h1>
      <img
        src={teamImage}
        alt="Team"
        className="w-full md:w-1/2 lg:w-1/3 rounded shadow-lg mb-6"
      />
      <p className="text-lg">
        Our team is composed of skilled professionals with diverse backgrounds
        in software engineering, design, and product management. We collaborate
        closely to deliver high-quality software that meets the needs of our
        users.
      </p>
    </div>
  );
};

export default Team;
