import React from "react";
import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import logoImage from "assets/logo.png";

const Login = ({ sectionName }) => {
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
      <Grid
        item
        style={{
          padding: 10,
          backgroundColor: "#4b95ba",
          borderBottom: `5px solid ${theme.palette.primary.main}`,
          color: "white",
          fontStyle: "italic",
          textAlign: "center",
          fontSize: 25,
        }}
      >
        <div>{sectionName}</div>
      </Grid>
      <Grid item xs style={{ flexGrow: 1 }}>
        <Grid
          item
          container
          justifyContent="space-around"
          alignItems="center"
          direction="column"
          style={{ height: "100%" }}
        >
          <Grid item style={{ marginTop: 10, marginBottom: 10 }}>
            <Container>
              <form>
                <Grid container>
                  {/* offset grid with column you want to offset */}
                  <Grid item xs={false} md={3} lg={4} />
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField
                      fullWidth
                      id="usuario"
                      label={
                        <Typography style={{ fontSize: 12 }}>
                          E-MAIL CADASTRADO NO HOSPITAL MOINHOS
                        </Typography>
                      }
                    />
                  </Grid>
                  {/* offset grid with column you want to offset */}
                  <Grid item xs={false} md={3} lg={4} />

                  {/* offset grid with column you want to offset */}
                  <Grid item xs={false} md={3} lg={4} />
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField
                      fullWidth
                      id="senha"
                      label={
                        <Typography style={{ fontSize: 12 }}>SENHA</Typography>
                      }
                    />
                  </Grid>
                  {/* offset grid with column you want to offset */}
                  <Grid item xs={false} md={3} lg={4} />

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    style={{ textAlign: "center", marginTop: 50 }}
                  >
                    <Button
                      data-testid="submit-button"
                      variant="contained"
                      color="primary"
                    >
                      ENVIAR
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </Grid>
          <Grid item style={{ width: "100%", fontWeight: "400" }}>
            <Container>
              <Link href="#">Como acessar</Link>
              <br />
              <Link href="#">Esqueci minha senha</Link>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

// TODO: add proptypes
export default Login;
