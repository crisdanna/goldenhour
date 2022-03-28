import React from "react";
import { Container, Grid } from "@material-ui/core";
import StyledText from "components/StyledText";
import IconButton from "components/IconButton";
import placeholderImage from "assets/placeholder.png";
import BaseResultPage from "components/BaseResultPage";

const LowUrgencyDegreeResult = () => {
  const buttonText = "Encerrar";

  return (
    <BaseResultPage buttonText={buttonText}>
      <Grid item xs style={{ marginTop: 10, marginBottom: 10 }}>
        <Container>
          De acordo com suas respostas seu quadro clínico foi classificado como{" "}
          <StyledText>MENOR GRAU DE URGÊNCIA</StyledText> e recomenda que se
          dirija à um hospital mais próximo.
        </Container>
      </Grid>
      <Grid item xs align="center" style={{}}>
        <IconButton imageUrl={placeholderImage} name={"Hospitais Próximos"} />
      </Grid>
    </BaseResultPage>
  );
};

export default LowUrgencyDegreeResult;
