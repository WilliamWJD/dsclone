import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChanelInfo from '../ChanelInfo';

const Layoult = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChanelInfo />
    </Grid>
  );
};

export default Layoult;
