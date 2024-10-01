import React from "react";
import SectionTitle from "../_common/SectionTitle";
import usePersonalData from "../../Hooks/usePersonalData";

const About = () => {
  const { firstName, description } = usePersonalData();
  return (
    <>
      <SectionTitle title="About" />

      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-7 col-lg-4 bg-info">
            <img src="/profile.jpg" alt="profile img" className="userImage" />
          </div>
          <div className="col-12 col-lg-5 mt-4 mt-lg-0">
            <h2>I'm {firstName}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
