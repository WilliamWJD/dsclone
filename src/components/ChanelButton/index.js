import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

const ChanelButton = ({ chanelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon>#</HashtagIcon>
        <span>{chanelName}</span>
      </div>
      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChanelButton;
