import styled from 'styled-components';
import { MdPersonAdd, MdSettings } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    font-size: 15px;
    color: var(--senary);
    margin-left: 5px;
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    > div svg {
      display: flex;
    }
  }

  > div svg {
    display: none;
  }
`;

export const HashtagIcon = styled.span`
  font-size: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(MdPersonAdd)`
  width: 16px;
  height: 16px;

  color: (--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(MdSettings)`
  width: 16px;
  height: 16px;

  margin-left: 4px;

  color: (--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;
