import React from "react";
import {
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
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
  return (
    <Grid container direction="column" style={{ minHeight: "100vh" }}>
      <Grid item>
        <Header backgroundImage={HealthImage} />
      </Grid>
      <Grid item xs style={{ flexGrow: 1 }}>
        {/* QuestionnaireScreen */}

        <Grid item container direction="column" style={{ height: "100%" }}>
          <Grid item style={{ backgroundColor: "gold" }}>
            <div>Hábitos & Saúde</div>
            <div>
              *Este questionário tem o objetivo de acompanhar os seus hábitos de
              saúde diários, procure sempre mantê-lo atualizado!
            </div>
          </Grid>
          <Grid item xs style={{ backgroundColor: "green" }}>
            <Grid
              item
              container
              direction="column"
              style={{ backgroundColor: "#babaca" }}
            >
              {questions.map((question) => (
                <Grid item xs key={question.title}>
                  <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">{question.title}</FormLabel>
                    <RadioGroup
                      row
                      //aria-label="gender"
                      name={question.title}
                      //value={value}
                      //onChange={handleChange}
                    >
                      <Grid
                        item
                        container
                        style={{ backgroundColor: "#babaca" }}
                      >
                        {question.alternatives.map((alternative) => (
                          <Grid item xs={6} style={{ backgroundColor: "blue" }}>
                            <FormControlLabel
                              key={alternative}
                              value={alternative}
                              label={alternative}
                              control={<Radio />}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item style={{ backgroundColor: "darkred" }}>
            botao
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HabitsAndHealth;
