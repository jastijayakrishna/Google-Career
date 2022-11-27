import axios from "axios";

import { Job } from "@/api/types";

const getJobs = async () => {
  const baseUrl ="https://goog-api-data.herokuapp.com";
  const response = await axios.get<Job[]>(`${baseUrl}/jobs`);
  return response.data;
};

export default getJobs;
