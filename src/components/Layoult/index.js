import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';

const Layoult = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
    </Grid>
  );
};

export default Layoult;
