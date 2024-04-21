
import { useContext } from 'react';
import { ListContext } from '../context/ListContext';

export function useMarketList() {
  const marketListContext = useContext(ListContext);

  // Add your custom hook logic here

  return marketListContext;
}
