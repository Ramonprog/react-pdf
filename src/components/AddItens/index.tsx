import { Button, TextField } from '@mui/material';

import { Container } from './styles';
import { useRef } from 'react';

interface AddItensProps {
  addList: (item: (prevItems: string[]) => string[]) => void;
}

export function AddItens({ addList }: AddItensProps) {
  const currentItem = useRef<HTMLInputElement>(null);

  function handleAddItem() {
    const itemName = currentItem.current?.value || '';
    addList((prevItems: string[]) => [...prevItems, itemName]);
    currentItem.current && (currentItem.current.value = '');
  }

  return (
    <Container>
      <TextField label="Nome" inputRef={currentItem} variant="outlined" />
      <Button variant='contained' onClick={handleAddItem}>Adicionar</Button>
    </Container>

  );
}
