import React, {useEffect, useState} from "react";
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
//import moment from 'moment'
import HealthImage from "assets/habits-and-health.png";
import Header from "components/Header";
import { getConditionList } from 'services/api'
import { useHistory } from "react-router-dom";

const HabitsAndHealth = () => {
  const [symptomList, setSymptomList] = useState([])

  const history = useHistory();

  const getConditions = async () => {
    let res = null;
    try {
      res = await getConditionList();
      setSymptomList(res.data);
    } catch (e) {
      // TODO: change it to a toast notification
      throw new Error("Erro ao carregar lista de sintomas");
    }
  };
  
  useEffect(() => {
    getConditions();
  }, []);

  const questions = [
    {
      inputName: 'condition1',
      title: "1. Possui alergia a algum medicamento?",
      alternatives: [{id: 1,name:"SIM"},{id: 2, name:"NÃO"}],
    },
    {
      inputName: 'condition2',
      title: "2. Toma algum medicamento de uso contínuo?",
      alternatives: [{id: 1,name:"SIM"},{id: 2, name:"NÃO"}],
    },
    {
      inputName: 'condition3',
      title: "3. Possui histórico de doença cardíaca em pais e/ou irmãos?",
      alternatives: [{id: 1,name:"SIM"},{id: 2, name:"NÃO"}],
    },
    {
      inputName: 'condition4',
      title: "4. É fumante?",
      alternatives: [{id: 1,name:"SIM"},{id: 2, name:"NÃO"}],
    },
    {
      inputName: 'condition5',
      title: "5. Selecione até as condições pré-existentes, caso possuir:",
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
      // TODO
      // const finalValue = {
      //   // TODO: get patient data from the global state
      //   "patient":{"id":1,"birthDate":"05/15/1983","addresses":[{"id":1}]},
      //   "age":38,

      //   "date":moment().format('L'),
      //   "time":moment().format('HH:mm'), 
      //   "conditions": values,
      // }
      // sendHealthForm(finalValue)
      history.push('/home')
    },
  });


  function toggleArrayItem(a, v) {
    var i = a.indexOf(v);
    if (i === -1) a.push(v);
    else a.splice(i, 1);
  }

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
        <form onSubmit={formik.handleSubmit}>
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

export default HabitsAndHealth;
