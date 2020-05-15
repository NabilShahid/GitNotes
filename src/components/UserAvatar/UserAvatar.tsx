import * as React from 'react';

export interface UserAvatarProps {
  src: string;
  width: string;
}

const UserAvatar: React.SFC<UserAvatarProps> = ({
  src,
  width,
}: UserAvatarProps) => {
  return <img src={src} style={{ width, borderRadius: '50%' }} alt="User" />;
};

export default UserAvatar;
