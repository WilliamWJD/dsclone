import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChanelInfo from '../ChanelInfo';
import ChanelList from '../ChanelList';

const Layoult = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChanelInfo />
      <ChanelList />
    </Grid>
  );
};

export default Layoult;
