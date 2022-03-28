import React from "react";
import { Button, Grid } from "@material-ui/core";
import logoImage from "assets/logo.png";

const BaseResultPage = ({ buttonText, children }) => {
  return (
    <Grid container direction="column" style={{ minHeight: "100vh" }}>
      <Grid item>
        <div
          style={{
            backgroundImage: `url(${logoImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            maxWidth: "100%",
            height: "30vh",
            margin: 10,
          }}
        ></div>
      </Grid>
      <Grid item xs style={{ flexGrow: 1 }}>
        <Grid
          item
          container
          justifyContent="center"
          direction="column"
          style={{ height: "100%" }}
        >
          {children}
        </Grid>
      </Grid>
      <Grid item style={{}}>
        <Button
          variant="contained"
          color="primary"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
};

export default BaseResultPage;
