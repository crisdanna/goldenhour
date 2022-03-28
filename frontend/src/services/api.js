import axios from "axios";

const HOST = 'http://localhost:8085/schwester'

export async function getQuestionnaireQuestion() {
  const res = await axios.get(`${HOST}/symptom/list`);

  return res;
}

export async function postQuestionnaireQuestionResponse(data) {
  const res = await axios.post({
    url: `${HOST}/initial_symptoms`,
    data: data
  })

  return res
}

export async function getSymptomLocations() {
  const res = await axios.get(`${HOST}/symptom/location/list`);

  return res;
}

export async function getSymptomDurations() {
  const res = await axios.get(`${HOST}/symptom/duration/list`);

  return res;
}

export async function getSymptomList() {
  const res = await axios.get(`${HOST}/symptom/list`);

  return res;
}

export async function postQuestionnaire(data) {
  const res = await axios.post(
    `${HOST}/questionnaire`,
    data
  )

  return res
}