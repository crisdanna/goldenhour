import React from "react";
import HomeComponent from "components/Home";
import HomeBackground from "assets/home-background.png";
import Header from 'components/Header'
import FloatingUserInformation from "components/FloatingUserInformation";

const Home = () => {
  return (
    <div>
      <Header backgroundImage={HomeBackground} />
      <FloatingUserInformation />
      <HomeComponent />
    </div>
  );
};

export default Home;
