import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import logoImage from "assets/logo.png";
import qrCodeImage from "assets/qr-code.png";

const StyledText = ({ children, color }) => {
  const theme = useTheme();
  return (
    <span
      style={{ color: color || theme.palette.primary.main, fontWeight: "bold" }}
    >
      {children}
    </span>
  );
};

const ConfirmedHealthCare = () => {
  const buttonText = "Encerrar";
  const theme = useTheme();

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
              <StyledText>PRIORIZAÇÃO DE ATENDIMENTO CONFIRMADA!</StyledText>
            </Container>
          </Grid>

          <Grid item xs style={{ marginTop: 10, marginBottom: 10 }}>
            <Container>
              Ao chegar apresentar o QR Code gerado atraǘes de seu Socorrista.
            </Container>
          </Grid>
          <Grid item xs align="center" style={{}}>
            <Container>
              <div
                style={{
                  maxWidth: "500px",
                  border: "1px solid black",
                  borderRadius: "20px",
                  marginBottom: 15,
                  padding: 15,
                }}
              >
                <StyledText>
                  <div style={{ textAlign: "left" }}>
                    Pré-Triagem de Emergência
                  </div>
                </StyledText>
                <div style={{ textAlign: "left", fontSize: 14 }}>
                  21/03/22 às 21:45
                </div>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  style={{ marginTop: 10, marginBottom: 10 }}
                >
                  <Grid item xs>
                    <div
                      style={{
                        backgroundImage: `url(${qrCodeImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        maxWidth: "100%",
                        height: "150px",
                        margin: 10,
                      }}
                    ></div>
                  </Grid>
                  <Grid item xs style={{ textAlign: "left" }}>
                    <div style={{ paddingBottom: 15 }}>
                      <StyledText color="#f2bf0a">
                        Gravidade Moderada
                      </StyledText>
                    </div>
                    <div
                      style={{
                        color: theme.palette.primary.main,
                        paddingBottom: 10,
                      }}
                    >
                      Emerência Hospital Moinhos de Vento
                    </div>
                    <div style={{ fontSize: 12 }}>
                      Localização: Bloco C | Entrada pela Rua Ramiro Barcelos,
                      910 - Porto Alegre/RS
                    </div>
                  </Grid>
                </Grid>
                <div style={{ textAlign: "left", fontSize: 14 }}>
                  Telefones:
                  <span style={{ color: theme.palette.primary.main }}>
                    (51) 3537.8000 - (51) 3314.3434
                  </span>
                </div>
              </div>
            </Container>
          </Grid>
          {/* Spacing grid, find another way to accomplish this */}
          <Grid item xs style={{ marginTop: 10, marginBottom: 10 }}></Grid>
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

export default ConfirmedHealthCare;
