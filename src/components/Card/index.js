import React from 'react';
import {Header, Wrapper, Content, Ul} from './styles';

export const Card = () => {
  return (
    <Wrapper>
      <Header>User name</Header>
      <Content>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
        <Ul>
          <li>favs: 5</li>
          <li>retweets: 3</li>
        </Ul>
      </Content>
    </Wrapper>
  );
}