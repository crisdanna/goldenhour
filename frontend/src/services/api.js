import axios from "axios";

const HOST = process.env.API_BASE_URL;

export async function getSymptoms() {
  const res = await axios.get({
    url: `${HOST}/symptom/list`,
  });

  return res;
}
