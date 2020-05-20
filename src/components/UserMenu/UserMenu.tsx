import * as React from 'react';
import './UserMenu.css';
import history from '../../services/history';
import ROUTES from '../../constants/routes';

export interface UserMenuProps {
  login: string;
}

const UserMenu: React.SFC<UserMenuProps> = ({ login }: UserMenuProps) => {
  return (
    <div className="user-menu material-box-shadow">
      <div className="user-menu-item">Signed in as</div>
      <div className="user-menu-item">{login}</div>
      <div className="user-menu-item-seperator" />
      <div
        className="user-menu-item user-menu-clickable"
        role="button"
        onClick={() => {
          history.push(ROUTES.Profile);
        }}
        onKeyPress={() => {
          history.push(ROUTES.Profile);
        }}
        tabIndex={0}
      >
        Your gists
      </div>
      <div
        className="user-menu-item user-menu-clickable"
        role="button"
        tabIndex={0}
        onClick={() => {
          history.push(ROUTES.Starred);
        }}
        onKeyPress={() => {
          history.push(ROUTES.Starred);
        }}
      >
        Starred gists
      </div>
      <div
        className="user-menu-item user-menu-clickable"
        role="button"
        onClick={() => {}}
        onKeyPress={() => {}}
        tabIndex={0}
      >
        Help
      </div>
      <div className="user-menu-item-seperator" />
      <div
        className="user-menu-item user-menu-clickable"
        role="button"
        onClick={() => {}}
        onKeyPress={() => {}}
        tabIndex={0}
      >
        Your GitHub profile
      </div>
      <div
        className="user-menu-item user-menu-clickable"
        role="button"
        onClick={() => {}}
        onKeyPress={() => {}}
        tabIndex={0}
      >
        Sign out
      </div>
    </div>
  );
};

export default UserMenu;
