import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChanelMessage, { Mention } from '../ChanelMessage';

import ArrayMessages from '../../services/messages';

const ChanelData = () => {
  const messagesRef = useRef();

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, []);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {ArrayMessages.map((item) => (
          <ChanelMessage
            author={item.author}
            date={item.date}
            content={
              item.mention ? (
                <>
                  <Mention>{item.mention.userMention}</Mention>,{' '}
                  {item.mention.contentMention}
                </>
              ) : (
                item.content
              )
            }
          />
        ))}
      </Messages>
      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre" />
        {/* <InputIcon /> */}
      </InputWrapper>
    </Container>
  );
};

export default ChanelData;
