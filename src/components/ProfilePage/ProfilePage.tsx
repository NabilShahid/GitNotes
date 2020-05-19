import * as React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import './ProfilePage.css';
import UserAvatar from '../UserAvatar/UserAvatar';
import { getUserGists } from '../../services/apis';

export interface ProfilePageProps {
  avatarUrl?: string;
  login?: string;
}

const ProfilePage: React.SFC<ProfilePageProps> = ({
  avatarUrl,
  login,
}: ProfilePageProps) => {
  useEffect(() => {
    if (login) {
      getUserGists(login || '').then((res) => {
        console.log(res);
      });
    }
  }, [login]);
  return (
    <div className="profile-page-container">
      <div className="profile-page-info-container">
        <UserAvatar src={avatarUrl || ''} style={{ width: '220px' }} />
        <div className="profile-page-login-name">{login}</div>
      </div>
    </div>
  );
};

/**
 * state to props mapping
 */
const mapStateToProps = (state: any) => {
  return {
    avatarUrl: state.userReducer.User.AvatarUrl,
    login: state.userReducer.User.Login,
  };
};
export default connect(mapStateToProps, null)(ProfilePage);
