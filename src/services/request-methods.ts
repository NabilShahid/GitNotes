import * as axios from 'axios';
import { AxiosResponse } from 'axios';
import { getToken } from './local-storage';

export const performGetRequest = async (
  url: string,
  config: axios.AxiosRequestConfig = {},
): Promise<AxiosResponse> => {
  const token = getToken() || '';

  config.headers = {
    Authorization: `token ${token}`,
  };

  const result = await axios.default.get(url, config);
  return result;
};
export const performPostRequest = async (
  url: string,
  data: Object,
  config: axios.AxiosRequestConfig = {},
): Promise<AxiosResponse> => {
  const token = getToken() || '';

  config.headers = {
    Authorization: `token ${token}`,
  };
  // cleanup required
  const result = await axios.default.post(url, data, config);
  return result;
};
