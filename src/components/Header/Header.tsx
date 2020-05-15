import * as React from 'react';
import { REDIRECT_URL } from '../../constants/github-app-info';
import ActionButton from '../ActionButton/ActionButton';
import './Header.css';

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => (
  <header className="main-header">
    <div className="text-align-right" style={{ flex: '0 0 18%' }}>
      EMUMBA
    </div>
    <div className="text-align-right" style={{ flex: '0 0 60%' }}>
      <input type="text" />
    </div>
    <div style={{ flex: '0 0 22%' }}>
      <ActionButton
        click={() => {
          window.location.href = REDIRECT_URL;
        }}
        text="Login"
      />
    </div>

    {/* <a href={REDIRECT_URL}>Login</a> */}
  </header>
);

export default Header;
