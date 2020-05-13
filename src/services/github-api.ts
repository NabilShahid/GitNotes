import * as axios from 'axios';
import API_BASE_URL, { API_CALLS } from '../constants/api-info';
import { performGetRequest } from './requests';

export default 1;

export const authenticateUser = async (
  clientId: string,
  code: string,
): Promise<axios.AxiosResponse> => {
  const result = await performGetRequest(
    `${API_BASE_URL}/${API_CALLS.AuthenticateUser}?client_id=${clientId}&code=${code}`,
  );
  return result;
};
