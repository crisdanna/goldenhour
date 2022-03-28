import React from "react";
import { Container, Grid } from "@material-ui/core";
import StyledText from "components/StyledText";
import IconButton from "components/IconButton";
import agendaImage from "assets/agenda.png";
import BaseResultPage from "components/BaseResultPage";
import { useHistory } from "react-router-dom";

const LowRiskResult = () => {
  const buttonText = "Encerrar";
  const history = useHistory();

  return (
    <BaseResultPage buttonText={buttonText}>
      <Grid item xs style={{ marginTop: 10, marginBottom: 10 }}>
        <Container>
          De acordo com suas respostas seu quadro clínico foi classificado como{" "}
          <StyledText>BAIXO RISCO</StyledText> e recomenda que agende uma
          consulta médica.
        </Container>
      </Grid>
      <Grid item xs align="center" style={{}}>
        <IconButton imageUrl={agendaImage} name={"Agendar Consulta"} onClick={_ => { history.push('/home')}} />
      </Grid>
    </BaseResultPage>
  );
};

export default LowRiskResult;
