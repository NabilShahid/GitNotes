import * as axios from 'axios';
import { getToken } from './local-storage';
import APP_SERVER_API_BASE_URL, {
  APP_SERVER_API_CALLS,
  GITHUB_BASE_URL,
  GITHUB_API_CALLS,
} from '../constants/api-info';
import { performGetRequest, performPostRequest } from './request-methods';

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
export const getGist = async (gistId: string): Promise<axios.AxiosResponse> => {
  const result = await performGetRequest(
    `${GITHUB_BASE_URL}/${GITHUB_API_CALLS.Gists}/${gistId}`,
  );
  return result;
};

export const getGistContent = async (
  rawUrl: string,
): Promise<axios.AxiosResponse> => {
  const result = await performGetRequest(rawUrl, { responseType: 'text' });
  return result;
};

export const forkGist = async (
  gistId: string,
): Promise<axios.AxiosResponse | boolean> => {
  if (getToken()) {
    const result = await performPostRequest(
      `${GITHUB_BASE_URL}/${GITHUB_API_CALLS.Gists}`,
      {
        description: 'Hello World Examples',
        public: true,
        files: {
          'hello_world.rb': {
            content:
              'class HelloWorld\n   def initialize(name)\n      @name = name.capitalize\n   end\n   def sayHi\n      puts "Hello !"\n   end\nend\n\nhello = HelloWorld.new("World")\nhello.sayHi',
          },
          'hello_world.py': {
            content:
              'class HelloWorld:\n\n    def __init__(self, name):\n        self.name = name.capitalize()\n       \n    def sayHi(self):\n        print "Hello " + self.name + "!"\n\nhello = HelloWorld("world")\nhello.sayHi()',
          },
          'hello_world_ruby.txt': {
            content: 'Run `ruby hello_world.rb` to print Hello World',
          },
          'hello_world_python.txt': {
            content: 'Run `python hello_world.py` to print Hello World',
          },
        },
      },
    );
    return result;
  }
  return false;
};
