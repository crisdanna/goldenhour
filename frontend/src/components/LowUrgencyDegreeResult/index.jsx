import React from "react";
import {
  Button,
  Container,
  Grid,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import IconButton from "components/IconButton";
import logoImage from "assets/logo.png";
import placeholderImage from "assets/placeholder.png";

const StyledText = (props) => {
  const theme = useTheme();
  return (
    <span style={{ color: theme.palette.primary.main, fontWeight: "bold" }}>
      {props.children}
    </span>
  );
};

const LowUrgencyDegreeResult = () => {
  const buttonText = "Encerrar";

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
          <Grid item xs style={{ marginTop: 10, marginBottom: 10 }}>
            <Container>
            De acordo com suas respostas seu quadro clínico foi classificado como <StyledText>MENOR GRAU DE URGÊNCIA</StyledText> e recomenda que se dirija à um hospital mais próximo.
            </Container>
          </Grid>
          <Grid item xs align="center" style={{}}>
            <IconButton imageUrl={placeholderImage} name={"Hospitais Próximos"} />
          </Grid>
          
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

export default LowUrgencyDegreeResult;
