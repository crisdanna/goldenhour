import React from "react";
import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
} from "@material-ui/core";

const Login = ({ sectionName }) => {
  return (
    <Container>
      <div>{sectionName}</div>
      <form>
        <Grid container>
          {/* offset grid with column you want to offset */}
          <Grid item xs={false} md={3} lg={4} />
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField
              fullWidth
              id="usuario"
              label="E-MAIL CADASTRADO NO HOSPITAL MOINHOS"
            />
          </Grid>
          {/* offset grid with column you want to offset */}
          <Grid item xs={false} md={3} lg={4} />

          {/* offset grid with column you want to offset */}
          <Grid item xs={false} md={3} lg={4} />
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField fullWidth id="senha" label="SENHA" />
          </Grid>
          {/* offset grid with column you want to offset */}
          <Grid item xs={false} md={3} lg={4} />

          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Button data-testid="submit-button">ENVIAR</Button>
          </Grid>
        </Grid>
      </form>

      <Link href="#">Esqueci minha senha</Link>

      <Link href="#">Como acessar</Link>
    </Container>
  );
};

// TODO: add proptypes
export default Login;
