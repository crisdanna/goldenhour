import axios from "axios";

const HOST = process.env.API_BASE_URL;

export async function getQuestionnaireQuestion() {
  const res = await axios.get({
    url: `${HOST}/symptom/list`,
  });

  return res;
}

export async function postQuestionnaireInitialSymptoms(data) {
  const res = await axios.post({
    url: `${HOST}/initial_symptoms`,
    data: data
  })

  return res
}