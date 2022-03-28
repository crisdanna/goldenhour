import React from "react";
import { Container, Grid } from "@material-ui/core";
import IconButton from "components/IconButton";
import ambulanceImage from "assets/ambulance.png";
import BaseResultPage from "components/BaseResultPage";
import StyledText from "components/StyledText";

const ModerateRiskResult = () => {
  const buttonText = "Notificar hospital";

  return (
    <BaseResultPage buttonText={buttonText}>
      <Grid item xs style={{ marginTop: 10, marginBottom: 10 }}>
        <Container>
          De acordo com suas respostas seu quadro clínico foi classificado como{" "}
          <StyledText>RISCO MODERADO</StyledText> e recomenda que chame uma
          ambulância.
        </Container>
      </Grid>
      <Grid item xs align="center" style={{}}>
        <IconButton imageUrl={ambulanceImage} name={"Chamar Ambulância"} />
      </Grid>
      <Grid item xs>
        <Container>
          Para priorizar seu atendimento no HMV clicar no botão{" "}
          <StyledText>[NOTIFICAR HOSPITAL]</StyledText> e aguardar confirmação.
        </Container>
      </Grid>
    </BaseResultPage>
  );
};

export default ModerateRiskResult;
