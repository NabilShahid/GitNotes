import * as React from 'react';
import { REDIRECT_URL } from '../../constants/github-app-info';

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => (
  <header>
    <a href={REDIRECT_URL}>Login</a>
  </header>
);

export default Header;
