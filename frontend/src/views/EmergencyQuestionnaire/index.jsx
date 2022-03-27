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
import EmergencyImage from "assets/emergency-questionnaire.png";
import Header from "components/Header";
import IntensityInput from 'components/IntensityInput'

const EmergencyQuestionnaire = () => {
  const questions = [
    {
      title: "1. A sua dor está localizada em qual região?",
      alternatives: ['Central', 'Difusa', 'Irradiada'],
    },
    {
      title: "2. Qual a característica desta dor?",
      alternatives: [
        'Em aperto, opressão, pressão ou queimação',
        'Com irradiação para o braço esquerdo',
        'Em pontadas ou agulhadas'
      ],
    },
    {
      title: "3. Quanto tempo já se passou?",
      alternatives: ['5 a 20 minutos', '20 a 30 minutos', '+ de 30 min', 'não tenho certeza'],
    },
    {
      title: "4. Possui algum dos sintomas abaixo?",
      alternatives: ["Falta de ar", 'Palpitação', 'Sudorese', 'Tontura', 'Fraqueza', 'Desmaio', 'Náusea', 'Vômitos', 'Inchaço'],
      multipleChoiceQuestion: true,
    }
  ];
  const title = "Questionário de Emergência";
  const subTitle =
    "*Este questionário tem o objetivo de lhe auxiliar no diagnóstico prévio com base em seus sintomas e orientar se deverá procurar atendimento médico de emergência.";
  const buttonText = "Avaliar";

  return (
    <Grid container direction="column" style={{ minHeight: "100vh" }}>
      <Grid item>
        <Header backgroundImage={EmergencyImage} />
      </Grid>
      <Grid item xs style={{ flexGrow: 1 }}>
        {/* QuestionnaireScreen */}
        <Grid item container direction="column" style={{ height: "100%" }}>
          <Grid item style={{ marginTop: 10, marginBottom: 10 }}>
            <Container>
              <Typography color='primary'>{title}</Typography>
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
                                    control={<Checkbox color="primary" />}
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
                                  control={<Radio color="primary" />}
                                />
                              </Grid>
                            ))}
                          </Grid>
                        </RadioGroup>
                      )}
                    </FormControl>
                  </Grid>
                ))}

                <FormLabel
                  component="legend"
                  style={{ fontSize: 14, color: "black" }}
                >
                  5. Qual a intensidade da sua dor no geral ?
                </FormLabel>
                <IntensityInput style={{ marginLeft: 20, marginRight: 20 }} />
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

export default EmergencyQuestionnaire;
