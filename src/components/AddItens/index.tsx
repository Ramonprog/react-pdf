import { Button, TextField } from '@mui/material';

import { Container } from './styles';
import { FormEvent, useRef } from 'react';

interface AddItensProps {
  addList: (item: (prevItems: string[]) => string[]) => void;
}

export function AddItens({ addList }: AddItensProps) {
  const currentItem = useRef<HTMLInputElement>(null);

  function handleAddItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const itemName = currentItem.current?.value || '';
    addList((prevItems: string[]) => [...prevItems, itemName]);
    currentItem.current && (currentItem.current.value = '');
  }

  return (
    <form onSubmit={handleAddItem}>
      <Container>
        <TextField label="Nome" inputRef={currentItem} variant="outlined" />
        <Button variant='contained' type='submit'>Adicionar</Button>
      </Container>
    </form>


  );
}
