import axios from "axios";

import { Degree } from "@/api/types";

const getDegrees = async () => {
  const baseUrl = "https://goog-api-data.herokuapp.com";
  const response = await axios.get<Degree[]>(`${baseUrl}/degrees`);
  return response.data;
};

export default getDegrees;
