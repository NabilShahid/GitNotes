import * as axios from 'axios';
import APP_SERVER_API_BASE_URL, {
  APP_SERVER_API_CALLS,
} from '../constants/api-info';
import { performGetRequest } from './request-methods';

export default 1;

export const authenticateUser = async (
  clientId: string,
  code: string,
): Promise<axios.AxiosResponse> => {
  const result = await performGetRequest(
    `${APP_SERVER_API_BASE_URL}/${APP_SERVER_API_CALLS.AuthenticateUser}?client_id=${clientId}&code=${code}`,
  );
  return result;
};
