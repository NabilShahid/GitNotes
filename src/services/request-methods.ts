import * as axios from 'axios';
import { AxiosResponse } from 'axios';
import { getToken } from './local-storage';

export const performGetRequest = async (
  url: string,
  config: axios.AxiosRequestConfig = {},
): Promise<AxiosResponse> => {
  const token = getToken() || 'hello';

  config.headers = {
    Authorization: `token ${token}`,
  };

  const result = await axios.default.get(url, config);
  return result;
};
export const performPostRequest = () => {
  const a = 1;
  return a;
};
