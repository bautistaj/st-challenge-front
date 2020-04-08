import React from 'react';
import { Wrapper } from './styles';
import { Column } from "../../components/Colum";

export const ListOfColumns = ({hashtags}) => {
  console.log(hashtags);
  
  return (
    <Wrapper>
      {
        hashtags && hashtags.map(item => <Column key={item.hashtag} {...item}/>)
      }
    </Wrapper>
  );
}