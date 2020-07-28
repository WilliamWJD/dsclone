import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadPhoneIcon,
  SettingsIcon,
} from './styles';

const UserInfo = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>William Dias</strong>
          <span>#450</span>
        </UserData>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadPhoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
