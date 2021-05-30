import axios from 'axios';
import {urls, headers} from '../reqConf';

export const deleteAccount = async (params) => {
  try {
    const url = `${urls.users}/delete`;
    const data = {userId: params.userId};
    const header = headers(params.jwt);

    const resp = await axios.delete(url, data, header);
    return resp.data;
  } catch (error) {
    return error;
  }
};
