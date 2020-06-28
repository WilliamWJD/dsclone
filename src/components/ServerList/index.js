import React from 'react'

import ServerButton from '../ServerButton'

import { Container, Separator } from './styles'

const ServerList = () => {
  return (
    <Container>
      <ServerButton isHome/>

      <Separator/>

      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={3}/>
      <ServerButton />
      <ServerButton mentions={9}/>
    </Container>
  )
}

export default ServerList