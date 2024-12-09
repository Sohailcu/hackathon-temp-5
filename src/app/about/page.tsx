import React from "react";
import AboutUs from "../components/about-Components/aboutus";
import BigCompannies from "../components/about-Components/companies";
import MeetTeam from "../components/about-Components/meetTeam";
import Problem from "../components/about-Components/problem";
import Work from "../components/about-Components/work";
import Footer from "../components/footer";
import HeaderAbout from "../components/about-Components/HeaderAbout";

const AboutPage = () => {
  return (
    <>
      <HeaderAbout/>
      <AboutUs />
      <Problem />
      <MeetTeam />
      <BigCompannies />
      <Work />
      <Footer />
    </>
  );
};

export default AboutPage;