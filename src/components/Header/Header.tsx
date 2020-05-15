import * as React from 'react';
import { REDIRECT_URL } from '../../constants/github-app-info';
import ActionButton from '../ActionButton/ActionButton';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import eMumbaLogo from '../../assets/images/emumba-white-logo.png'; // Tell webpack this JS file uses this image

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => (
  <header className="header material-box-shadow">
    <div style={{ flex: '0 1 6%' }} />
    <div className="text-align-right" style={{ flex: '0 0 15%' }}>
      <img src={eMumbaLogo} className="header-emumba-logo" alt="EMUMBA" />
    </div>
    <div style={{ flex: '0 1 41%' }} />
    <div className="text-align-right" style={{ flex: '0 0 25%' }}>
      <SearchBar input={() => {}} placeholder="Search Notes" />
    </div>
    <div style={{ flex: '0 0 16%', textAlign: 'left', margin: '2px 0 0 22px' }}>
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
