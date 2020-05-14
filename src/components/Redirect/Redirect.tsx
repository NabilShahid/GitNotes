import * as React from 'react';
import { authenticateUser, getCurrentUserInfo } from '../../services/apis';
import { CLIENT_ID } from '../../constants/github-app-info';
import { saveToken } from '../../services/local-storage';
import { useEffect } from 'react';

const validateSession = async (): Promise<string> => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code') || '';
  const result = await authenticateUser(CLIENT_ID, code);
  return result.data;
};

const OAuthRedirect: React.SFC = () => {
  useEffect(() => {
      alert("NIgga");
    validateSession().then(async (result: string) => {
      saveToken(result);
      const res = await getCurrentUserInfo();
      console.log(res);
    });
  }, []);
  return (
    <div>
      Redirecting...
      {}
    </div>
  );
};

export default OAuthRedirect;
