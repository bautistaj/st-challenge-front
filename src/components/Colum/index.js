import React from 'react';
import {Header, Wrapper} from './styles';
import { Card } from "../../components/Card";

export const Column = ({hashtag, tweets}) => {
  return (
    <Wrapper>
      <Header>#{ hashtag }</Header>
      {
        tweets && tweets.map(tweet => <Card key={tweet.id} {...tweet}/>)
      }
    </Wrapper>
  );
}