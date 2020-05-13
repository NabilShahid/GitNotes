import * as React from 'react';
import { authenticateUser } from '../../services/github-api';
import { CLIENT_ID } from '../../constants/github-app-info';

const validateSession = async (): Promise<string> => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code') || '';
  const result = await authenticateUser(CLIENT_ID, code);
  return result.data;
};

const OAuthRedirect: React.SFC = () => {
  validateSession();
  return (
    <div>
      Redirecting...
      {}
    </div>
  );
};

export default OAuthRedirect;
