import * as React from 'react';
import { REDIRECT_URL } from '../../constants/github-app-info';
import ActionButton from '../ActionButton/ActionButton';
import './Header.css';

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => (
  <header className="main-header">
    <ActionButton text="Login" />
    <a href={REDIRECT_URL}>Login</a>
  </header>
);

export default Header;
