import React from 'react';
import {Header, Wrapper} from './styles';

export const Column = ({children}) => {
  return (
    <Wrapper>
      <Header># lorem</Header>
      {children}
    </Wrapper>
  );
}