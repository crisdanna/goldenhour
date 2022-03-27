import React, { useEffect, useState } from "react";
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
import { useFormik } from 'formik';

import EmergencyImage from "assets/emergency-questionnaire.png";
import Header from "components/Header";
import IntensityInput from 'components/IntensityInput'
import { getSymptomLocations, getSymptomDurations, getSymptomList } from 'services/api'

const EmergencyQuestionnaire = () => {
  const [symptomLocationList, setSymptomLocationList] = useState([])
  const [symptomDurationList, setSymptomDurationList] = useState([])
  const [symptomList, setSymptomList] = useState([])

  const getLocations = async () => {
    let res = null;
    try {
      res = await getSymptomLocations();
      setSymptomLocationList(res.data);
    } catch (e) {
      // TODO: change it to a toast notification
      throw new Error("Erro ao carregar lista de sintomas");
    }
  };

  const getDurations = async () => {
    let res = null;
    try {
      res = await getSymptomDurations();
      setSymptomDurationList(res.data);
    } catch (e) {
      // TODO: change it to a toast notification
      throw new Error("Erro ao carregar lista de sintomas");
    }
  };

  const getSymptoms = async () => {
    let res = null;
    try {
      res = await getSymptomList();
      setSymptomList(res.data);
    } catch (e) {
      // TODO: change it to a toast notification
      throw new Error("Erro ao carregar lista de sintomas");
    }
  };

  useEffect(() => {
    getLocations();
    getDurations();
    getSymptoms();
  }, []);

  const questions = [
    {
      inputName: "q1",
      title: "1. A sua dor está localizada em qual região?",
      alternatives: symptomLocationList
    },
    {
      inputName: "q2",
      title: "2. Qual a característica desta dor?",
      alternatives: [
        {
          id2: 1,
          id: 'Em aperto, opressão, pressão ou queimação',
          name: 'Em aperto, opressão, pressão ou queimação', 
        },
        {
          id2: 2,
          id: 'Com irradiação para o braço esquerdo',
          name: 'Com irradiação para o braço esquerdo',
        },
        {
          id2: 3,
          id: 'Em pontadas ou agulhadas',
          name: 'Em pontadas ou agulhadas',
        },
      ],
    },
    {
      inputName: "q3",
      title: "3. Quanto tempo já se passou?",
      alternatives: symptomDurationList
    },
    {
      inputName: "q4",
      title: "4. Possui algum dos sintomas abaixo?",
      alternatives: symptomList,
      multipleChoiceQuestion: true,
    },
  ];

  const questionNamesAndDefaultValueArray = questions.map((x) => {
    const obj = {};
    if (x.multipleChoiceQuestion) obj[x["inputName"]] = [];
    else obj[x["inputName"]] = "";

    return obj;
  });
  const initialValues = Object.assign({}, ...questionNamesAndDefaultValueArray);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  function toggleArrayItem(a, v) {
    var i = a.indexOf(v);
    if (i === -1) a.push(v);
    else a.splice(i, 1);
  }

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
        <form onSubmit={formik.handleSubmit}>
         {/*console.log('values', formik.values)*/}
          <Grid item container direction="column" style={{ height: "100%" }}>
            <Grid item style={{ marginTop: 10, marginBottom: 10 }}>
              <Container>
                <Typography color="primary">{title}</Typography>
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
                    <Grid
                      item
                      xs
                      key={question.title}
                      style={{ marginTop: 15 }}
                    >
                      <FormControl component="fieldset" fullWidth>
                        <FormLabel
                          component="legend"
                          style={{ fontSize: 14, color: "black" }}
                        >
                          {question.title}
                        </FormLabel>

                        {question.multipleChoiceQuestion ? (
                          <>
                            <FormGroup
                              name={question.inputName.toString()}
                              value={formik.values[question.inputName]}
                              onChange={(event) => {
                                const current = JSON.parse(
                                  JSON.stringify(
                                    formik.values[question.inputName]
                                  )
                                ); // TODO: change this deep clone operation with the Lodash method
                                toggleArrayItem(
                                  Array.isArray(current) ? current : [],
                                  event.target.value
                                );
                                formik.setFieldValue(
                                  question.inputName,
                                  current
                                );
                              }}
                            >
                              <Grid
                                item
                                container
                                style={{ marginLeft: 20, marginRight: 20 }}
                              >
                                {question.alternatives.map((alternative) => (
                                  <Grid
                                    item
                                    xs={6}
                                    key={alternative.id} 
                                    style={{}}
                                  >
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          color="primary"
                                          value={alternative.id.toString()}
                                          name={question.inputName}
                                        />
                                      }
                                      value={alternative.id.toString()}
                                      name={question.inputName}
                                      label={
                                        <Typography
                                          style={{
                                            fontSize: 12,
                                            color: "#424244",
                                          }}
                                        >
                                          {alternative.name}
                                        </Typography>
                                      }
                                    />
                                  </Grid>
                                ))}
                              </Grid>
                            </FormGroup>
                          </>
                        ) : (
                          <RadioGroup
                            row
                            name={question.inputName.toString()}
                            value={formik.values[question.inputName].toString()}
                            onChange={(event) => {
                              formik.setFieldValue(
                                question.inputName.toString(),
                                event.currentTarget.value
                              );
                            }}
                          >
                            <Grid
                              item
                              container
                              style={{ marginLeft: 20, marginRight: 20 }}
                            >
                              {question.alternatives.map((alternative) => (
                                <Grid item xs={6} key={alternative.id} style={{}}>
                                  <FormControlLabel
                                    value={alternative.id.toString()}
                                    label={
                                      <Typography
                                        style={{
                                          fontSize: 12,
                                          color: "#424244",
                                        }}
                                      >
                                        {alternative.name}
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
                type="submit"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                {buttonText}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default EmergencyQuestionnaire;
