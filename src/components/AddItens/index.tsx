import { Button, TextField } from '@mui/material';

import { Container } from './styles';
import { FormEvent, useRef } from 'react';
import { useMarketList } from '../../hooks/useMarketList';


export function AddItens() {
  const currentItem = useRef<HTMLInputElement>(null);
  const { addItem } = useMarketList();

  function handleAddItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const itemName = currentItem.current?.value || '';
    addItem(itemName);
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
