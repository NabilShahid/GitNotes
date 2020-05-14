import * as React from 'react';
import { REDIRECT_URL } from '../../constants/github-app-info';
import './Header.css';

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => (
  <header className="main-header">
    <a href={REDIRECT_URL}>Login</a>
  </header>
);

export default Header;
