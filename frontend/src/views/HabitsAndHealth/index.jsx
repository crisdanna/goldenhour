import React from "react";
import {
  Button,
  Container,
  Checkbox,
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import HealthImage from "assets/habits-and-health.png";
import Header from "components/Header";

const HabitsAndHealth = () => {
  const questions = [
    {
      title: "1. Qual sua faixa-etária?",
      alternatives: ["< 45 anos", "> 45 à 54", "> 54 à 64", "> 64 anos"],
    },
    {
      title: "2. Selecione até as condições pré-existentes, caso possuir:",
      alternatives: [
        "Sedentarismo",
        "Obesidade",
        "Hipertensão",
        "Colesterol Alto",
        "Diabetes",
        "Insuficiência Renal",
      ],
      multipleChoiceQuestion: true,
    },
    {
      title: "3. Possui histórico de doença cardíaca em pais e/ou irmãos?",
      alternatives: ["SIM", "NÃO"],
    },
    {
      title: "4. É fumante?",
      alternatives: ["SIM", "NÃO"],
    },
    {
      title: "5. Qual sua faixa-etária?",
      alternatives: ["< 45 anos", "> 45 à 54", "> 54 à 64", "> 64 anos"],
    },
    {
      title: "6. Selecione até as condições pré-existentes, caso possuir:",
      alternatives: [
        "Sedentarismo",
        "Obesidade",
        "Hipertensão",
        "Colesterol Alto",
        "Diabetes",
        "Insuficiência Renal",
      ],
      multipleChoiceQuestion: true,
    },
    {
      title: "7. Possui histórico de doença cardíaca em pais e/ou irmãos?",
      alternatives: ["SIM", "NÃO"],
    },
    {
      title: "8. É fumante?",
      alternatives: ["SIM", "NÃO"],
    },
  ];
  const title = "Hábitos & Saúde";
  const subTitle =
    "*Este questionário tem o objetivo de acompanhar os seus hábitos de saúde diários, procure sempre mantê-lo atualizado!";
  const buttonText = "Atualizar informações";

  return (
    <Grid container direction="column" style={{ minHeight: "100vh" }}>
      <Grid item>
        <Header backgroundImage={HealthImage} />
      </Grid>
      <Grid item xs style={{ flexGrow: 1 }}>
        {/* QuestionnaireScreen */}
        <Grid item container direction="column" style={{ height: "100%" }}>
          <Grid item style={{ marginTop: 10, marginBottom: 10 }}>
            <Container>
              <Typography style={{ color: "#0165B6" }}>{title}</Typography>
              <Typography
                variant="subtitle1"
                style={{ fontStyle: "italic", fontSize: 10 }}
              >
                {subTitle}
              </Typography>
            </Container>
          </Grid>
          <Grid item xs style={{}}>
            <Grid item container direction="column" style={{}}>
              <Container>
                {questions.map((question) => (
                  <Grid item xs key={question.title} style={{ marginTop: 15 }}>
                    <FormControl component="fieldset" fullWidth>
                      <FormLabel
                        component="legend"
                        style={{ fontSize: 14, color: "black" }}
                      >
                        {question.title}
                      </FormLabel>

                      {question.multipleChoiceQuestion ? (
                        <>
                          <FormGroup>
                            <Grid
                              item
                              container
                              style={{ marginLeft: 20, marginRight: 20 }}
                            >
                              {question.alternatives.map((alternative) => (
                                <Grid item xs={6} style={{}}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    name={alternative}
                                    value={alternative}
                                    label={
                                      <Typography
                                        style={{
                                          fontSize: 12,
                                          color: "#424244",
                                        }}
                                      >
                                        {alternative}
                                      </Typography>
                                    }
                                  />
                                </Grid>
                              ))}
                            </Grid>
                          </FormGroup>
                        </>
                      ) : (
                        <RadioGroup row name={question.title}>
                          <Grid
                            item
                            container
                            style={{ marginLeft: 20, marginRight: 20 }}
                          >
                            {question.alternatives.map((alternative) => (
                              <Grid item xs={6} style={{}}>
                                <FormControlLabel
                                  key={alternative}
                                  value={alternative}
                                  label={
                                    <Typography
                                      style={{ fontSize: 12, color: "#424244" }}
                                    >
                                      {alternative}
                                    </Typography>
                                  }
                                  control={<Radio />}
                                />
                              </Grid>
                            ))}
                          </Grid>
                        </RadioGroup>
                      )}
                    </FormControl>
                  </Grid>
                ))}
              </Container>
            </Grid>
          </Grid>
          <Grid item style={{}}>
            <Button
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#0165B6",
              }}
            >
              {buttonText}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HabitsAndHealth;
