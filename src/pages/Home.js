import React from 'react';
import {HeaderComponent} from '../components/Header';
import {Search} from '../components/Search';
import {Column} from '../components/Colum';
import {Card} from '../components/Card';
import {ListOfColumns} from '../components/ListOfColumns'

export const Home = () => {
  return (
    <>
      <HeaderComponent/>
      <Search/>
      <ListOfColumns>
        <Column>
          <Card/>
          <Card/>
        </Column>

        <Column>
          <Card/>
        </Column>

        <Column>
          <Card/>
        </Column>
        
      </ListOfColumns>
      
    </>
  );
}