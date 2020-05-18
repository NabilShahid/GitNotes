import * as axios from 'axios';
import { getToken } from './local-storage';
import APP_SERVER_API_BASE_URL, {
  APP_SERVER_API_CALLS,
  GITHUB_BASE_URL,
  GITHUB_API_CALLS,
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

export const getCurrentUserInfo = async (): Promise<
  axios.AxiosResponse | boolean
> => {
  if (getToken()) {
    const result = await performGetRequest(
      `${GITHUB_BASE_URL}/${GITHUB_API_CALLS.User}`,
    );
    return result;
  }
  return false;
};
export const getPublicGists = async (
  page: number,
  perPage: number,
): Promise<axios.AxiosResponse> => {
  const result = await performGetRequest(
    `${GITHUB_BASE_URL}/${GITHUB_API_CALLS.PublicGists}?page=${page}&perPage=${perPage}`,
  );
  return result;
};
export const getGist = async (
  gistId: string,
): Promise<axios.AxiosResponse> => {
  const result = await performGetRequest(
    `${GITHUB_BASE_URL}/${GITHUB_API_CALLS.Gists}/${gistId}`,
  );
  return result;
};
