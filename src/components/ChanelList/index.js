import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChanelButton from '../ChanelButton';

const ChanelList = () => {
  return (
    <Container>
      <Category>
        <span>Canais de text</span>
        <AddCategoryIcon />
      </Category>

      <ChanelButton chanelName="chat-livre" />
      <ChanelButton chanelName="trabalho" />
      <ChanelButton chanelName="lolzinho" />
      <ChanelButton chanelName="csgo" />
      <ChanelButton chanelName="valorant" />
    </Container>
  );
};

export default ChanelList;
