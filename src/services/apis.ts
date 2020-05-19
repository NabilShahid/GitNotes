import * as axios from 'axios';
import { getToken } from './local-storage';
import APP_SERVER_API_BASE_URL, {
  APP_SERVER_API_CALLS,
  GITHUB_BASE_URL,
  GITHUB_API_CALLS,
} from '../constants/api-info';
import { performGetRequest, performPostRequest, performPutRequest } from './request-methods';

export default 1;

export const authenticateUser = async (
  clientId: string,
  code: string,
): Promise<axios.AxiosResponse> => {
  const result = await performGetRequest(
    `${APP_SERVER_API_BASE_URL}/${APP_SERVER_API_CALLS.AuthenticateUser}?client_id=${clientId}&code=${code}`,
    true,
  );
  return result;
};

export const getCurrentUserInfo = async (): Promise<
  axios.AxiosResponse | boolean
> => {
  if (getToken()) {
    const result = await performGetRequest(
      `${GITHUB_BASE_URL}/${GITHUB_API_CALLS.User}`,
      false,
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
    true,
  );
  return result;
};
export const getGist = async (gistId: string): Promise<axios.AxiosResponse> => {
  const result = await performGetRequest(
    `${GITHUB_BASE_URL}/${GITHUB_API_CALLS.Gists}/${gistId}`,
    true,
  );
  return result;
};

export const forkGist = async (
  gistId: string,
): Promise<axios.AxiosResponse | boolean> => {
  if (getToken()) {
    const result = await performPostRequest(
      `${GITHUB_BASE_URL}/${GITHUB_API_CALLS.Gists}/${gistId}/forks`,
      {},
      false,
    );
    return result;
  }
  return false;
};

export const starGist = async (
  gistId: string,
): Promise<axios.AxiosResponse | boolean> => {
  if (getToken()) {
    const result = await performPutRequest(
      `${GITHUB_BASE_URL}/${GITHUB_API_CALLS.Gists}/${gistId}/star`,
      {},
      false,
    );
    return result;
  }
  return false;
};
