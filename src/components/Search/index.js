import React from 'react';
import {Input, Form, Button } from './styles';
import { useInputValue } from '../../hooks/useImputValue';

export const Search = () => {
  const hashtag = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Buscar ',hashtag.value);
    
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="# buscar" {...hashtag}/>
        <Button>Buscar</Button>
      </Form>
    </>
    
  );
}