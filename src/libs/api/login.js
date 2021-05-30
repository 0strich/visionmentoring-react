import axios from "axios";
import { jsonHeader, urls } from "../reqConf";

export const postLogin = async (params) => {
  try {
    const resp = await axios.post(`${urls.users}/jwt`, params, jsonHeader);
    return resp.data;
  } catch (error) {
    return error;
  }
};
