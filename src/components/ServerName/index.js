import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Container, Title } from './styles';

const ServerName = () => {
  return (
    <Container>
      <Title>Servidor do Will</Title>
      <MdKeyboardArrowDown size={28} color="#fff" cursor="pointer" />
    </Container>
  );
};

export default ServerName;
