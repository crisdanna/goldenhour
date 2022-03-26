import React from "react";
import { Container, Grid } from "@material-ui/core";
import Folder from "assets/folder.png";
import MedicalResult from "assets/medical-result.png";
import PlaceholderRotated from "assets/placeholder-rotated.png";
import Sheet from "assets/sheet.png";
import IconButton from 'components/IconButton'

const Home = () => {
  return (
    <Container style={{ padding: 0, height: "100vh" }}>
      <Grid container direction="row" style={{ padding: 0, height: "100vh" }}>
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
                <IconButton
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
                <IconButton imageUrl={PlaceholderRotated} name={"Exames Realizados"} />
              </Grid>
              <Grid
                item
                style={{ padding: 20 }}
                xs={6}
                container
                alignItems="center"
                justifyContent="center"
              >
                <IconButton imageUrl={Sheet} name={"Hábitos & Saúde"} />
              </Grid>
              <Grid
                item
                style={{ padding: 20 }}
                xs={6}
                container
                alignItems="center"
                justifyContent="center"
              >
                <IconButton
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
