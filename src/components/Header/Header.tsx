import * as React from 'react';
import { connect } from 'react-redux';
import Popover from 'react-popover';
import { REDIRECT_URL } from '../../constants/github-app-info';
import ActionButton from '../ActionButton/ActionButton';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import eMumbaLogo from '../../assets/images/emumba-white-logo.png'; // Tell webpack this JS file uses this image
import { getToken } from '../../services/local-storage';
import UserAvatar from '../UserAvatar/UserAvatar';
import history from '../../services/history';
import ROUTES from '../../constants/routes';

export interface HeaderProps {
  avatarUrl?: string;
}
// const popoverProps = {
//   isOpen: true,
//   body: [<h1 key="a">Popover Title</h1>, <div key="b">Popover contents</div>],
// };
const Header: React.SFC<HeaderProps> = ({ avatarUrl }: HeaderProps) => {
  const [popoverOpen, setPopoverOpen]: [boolean, Function] = React.useState(
    false,
  );
  return (
    <header className="header material-box-shadow">
      <div style={{ flex: '0 1 6%' }} />
      <div
        className="text-align-right cursor-pointer"
        style={{ flex: '0 0 15%', marginTop: '5px' }}
        onClick={() => {
          history.push(ROUTES.Home);
        }}
        role="button"
        onKeyPress={() => {}}
        tabIndex={0}
      >
        <img src={eMumbaLogo} className="header-emumba-logo" alt="EMUMBA" />
      </div>
      <div style={{ flex: '0 1 45%' }} />
      <div
        className="text-align-right"
        style={{ flex: '0 0 25%', marginTop: '3px' }}
      >
        <SearchBar input={() => {}} placeholder="Search Notes" />
      </div>
      <div
        style={{
          flex: '0 0 12%',
          textAlign: 'left',
          margin: '5px 0 0 22px',
          height: 0,
        }}
      >
        {getToken() ? (
          <Popover
            isOpen={popoverOpen}
            place="below"
            body={<div style={{ background: 'white' }}>Hello</div>}
          >
            <button
              onClick={() => {
                setPopoverOpen(!popoverOpen);
              }}
              type="button"
              className="transparent-button cursor-pointer"
            >
              <UserAvatar
                src={avatarUrl || ''}
                style={{ width: '40px', marginTop: '-4px' }}
              />
            </button>
          </Popover>
        ) : (
          <ActionButton
            click={() => {
              window.location.href = REDIRECT_URL;
            }}
            text="Login"
          />
        )}
      </div>
    </header>
  );
};
/**
 * state to props mapping
 */
const mapStateToProps = (state: any) => {
  return {
    avatarUrl: state.userReducer.User.AvatarUrl,
  };
};
export default connect(mapStateToProps, null)(Header);
