import React from "react";
import { ButtonBase, Container, Grid } from "@material-ui/core";
import Folder from "assets/folder.png";
import MedicalResult from "assets/medical-result.png";
import PlaceholderRotated from "assets/placeholder-rotated.png";
import Sheet from "assets/sheet.png";
import { Icon } from "@material-ui/core";
import UserPicture from "assets/user-profile-picture.png";
import HomeBackground from "assets/home-background.png";
import LogoUrl from "assets/logo.png";

// TODO: use makeStyles to separate the styles from the code
// TODO: split this in smaller components 
const UserInformation = () => {
  // TODO: get from the state
  const patientName = "Miguel Arcanjo dos Santos";
  const patientId = "874521658";

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%, 60%)",
      }}
    >
      <Grid container direction="column">
        <Grid item>
          <img src={UserPicture} height={100} width={100} alt="profile" />
        </Grid>
        <Grid item>
          <div data-testid="patient-name" style={{color: '#212B89'}}>{patientName}</div>
        </Grid>
        <Grid item>
          <div data-testid="patient-id" style={{color: '#0165B6'}}>ID: {patientId}</div>
        </Grid>
      </Grid>
    </div>
  );
};
const HomeButton = ({ imageUrl, name }) => {
  return (
    <ButtonBase>
      <Grid container direction="column">
        <Grid item>
          <Icon style={{ height: 100, width: 100 }}>
            {/* TODO: add an alt to the icon (is this needed? ) */}
            <img src={imageUrl} height={100} width={100} alt="" />
          </Icon>
        </Grid>
        <Grid item style={{color: '#0165B6'}}>{name}</Grid>
      </Grid>
    </ButtonBase>
  );
};

const Home = () => {
  return (
    <Container style={{ padding: 0, height: "100vh" }}>
      <Grid container direction="row" style={{ padding: 0, height: "100vh" }}>
        <Grid
          item
          style={{
            backgroundColor: "blue",
            backgroundImage: `url(${HomeBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "20vh",
            width: "100vw",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", left: "5%" }}>
            <Icon style={{ height: 100 }}>
              {/* TODO: add an alt to the icon (is this needed? ) */}
              <img src={LogoUrl} height={100} alt="" />
            </Icon>
          </div>

          <UserInformation style={{ position: "absolute", bottom: 0 }} />
        </Grid>
        <Grid
          item
          style={{ flexGrow: "1", height: "80vh" }}
          container
          direction="column"
        >
          <Grid
            item
            style={{ flexGrow: "1" }}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={0}
              style={{ maxHeight: "40vh" }}
            >
              <Grid
                item
                style={{ padding: 20 }}
                xs={6}
                container
                alignItems="center"
                justifyContent="center"
              >
                <HomeButton
                  imageUrl={Folder}
                  name={"Histórico de Atendimento"}
                />
              </Grid>
              <Grid
                item
                style={{ padding: 20 }}
                xs={6}
                container
                alignItems="center"
                justifyContent="center"
              >
                <HomeButton imageUrl={PlaceholderRotated} name={"Exames Realizados"} />
              </Grid>
              <Grid
                item
                style={{ padding: 20 }}
                xs={6}
                container
                alignItems="center"
                justifyContent="center"
              >
                <HomeButton imageUrl={Sheet} name={"Hábitos & Saúde"} />
              </Grid>
              <Grid
                item
                style={{ padding: 20 }}
                xs={6}
                container
                alignItems="center"
                justifyContent="center"
              >
                <HomeButton
                  imageUrl={MedicalResult}
                  name={"Questionário de Emergência"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
