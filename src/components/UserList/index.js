import React from 'react';

import { Container, Role, User, Avatar } from './styles';

const UserRow = ({ nickName, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickName}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickName="William Dias" />

      <Role>Offline - 18</Role>
      <UserRow nickName="Karolaine Ribeiro" isBot />
      <UserRow nickName="User Test" />
      <UserRow nickName="User Test" />
      <UserRow nickName="User Test" />
      <UserRow nickName="User Test" />
      <UserRow nickName="User Test" />
      <UserRow nickName="User Test" />
      <UserRow nickName="User Test" />
      <UserRow nickName="User Test" />
      <UserRow nickName="User Test" />
      <UserRow nickName="User Test" />
      <UserRow nickName="User Test" />
      <UserRow nickName="User Test" />
      <UserRow nickName="User Test" />
    </Container>
  );
};

export default UserList;
