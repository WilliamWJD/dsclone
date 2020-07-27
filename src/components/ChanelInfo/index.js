import React from 'react';

import {
  Container,
  HashTagIcon,
  Title,
  Separator,
  Description,
} from './styles';

function ChanelInfo() {
  return (
    <Container>
      <HashTagIcon>#</HashTagIcon>
      <Title>chat-livre</Title>
      <Separator />
      <Description>Canal aberto para conversas</Description>
    </Container>
  );
}

export default ChanelInfo;
