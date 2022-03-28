import React, { useState } from "react";
import { Button, Container, Grid } from "@material-ui/core";

const PainScale = ({ title, bestCaseText, worstCaseText, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClick = (event) => {
    setSelectedValue(event.currentTarget.value);
    onChange(event.currentTarget.value);
  };

  return (
    <Container>
      <div>{title}</div>

      <Grid container spacing={3}>
        <Grid item xs={2}>
          <div>{bestCaseText}</div>
        </Grid>

        <Grid item xs={8}>
          <Button
            data-testid="1"
            value="1"
            variant={selectedValue === "1" ? "contained" : "text"}
            onClick={handleClick}
          >
            1
          </Button>
          <Button
            data-testid="2"
            value="2"
            variant={selectedValue === "2" ? "contained" : "text"}
            onClick={handleClick}
          >
            2
          </Button>
          <Button
            data-testid="3"
            value="3"
            variant={selectedValue === "3" ? "contained" : "text"}
            onClick={handleClick}
          >
            3
          </Button>
          <Button
            data-testid="4"
            value="4"
            variant={selectedValue === "4" ? "contained" : "text"}
            onClick={handleClick}
          >
            4
          </Button>
          <Button
            data-testid="5"
            value="5"
            variant={selectedValue === "5" ? "contained" : "text"}
            onClick={handleClick}
          >
            5
          </Button>
          <Button
            data-testid="6"
            value="6"
            variant={selectedValue === "6" ? "contained" : "text"}
            onClick={handleClick}
          >
            6
          </Button>
          <Button
            data-testid="7"
            value="7"
            variant={selectedValue === "7" ? "contained" : "text"}
            onClick={handleClick}
          >
            7
          </Button>
          <Button
            data-testid="8"
            value="8"
            variant={selectedValue === "8" ? "contained" : "text"}
            onClick={handleClick}
          >
            8
          </Button>
          <Button
            data-testid="9"
            value="9"
            variant={selectedValue === "9" ? "contained" : "text"}
            onClick={handleClick}
          >
            9
          </Button>
          <Button
            data-testid="10"
            value="10"
            variant={selectedValue === "10" ? "contained" : "text"}
            onClick={handleClick}
          >
            10
          </Button>
        </Grid>

        <Grid item xs={2}>
          <div>{worstCaseText}</div>
        </Grid>
      </Grid>
    </Container>
  );
};

// TODO: add prop types

export default PainScale;
