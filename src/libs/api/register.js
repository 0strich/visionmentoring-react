import axios from 'axios';
import {jsonHeader, urls} from '../reqConf';

export const postRegister = async (params) => {
  try {
    const resp = await axios.post(urls.users, params, jsonHeader);
    return resp.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
