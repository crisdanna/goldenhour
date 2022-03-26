import React from "react";
import HomeComponent from "components/Home";
import HomeBackground from "assets/home-background.png";
import Header from "components/Header";
import FloatingUserInformation from "components/FloatingUserInformation";
import { Grid } from "@material-ui/core";

const Home = () => {
  return (
    <Grid container direction="column" style={{ height: "100vh" }}>
      <Grid item>
        <Header backgroundImage={HomeBackground} />
        <FloatingUserInformation />
      </Grid>
      <Grid style={{ flexGrow: 1 }} item xs>
        <HomeComponent />
      </Grid>
    </Grid>
  );
};

export default Home;
