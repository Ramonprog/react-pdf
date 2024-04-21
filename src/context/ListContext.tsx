import { ReactNode, createContext, useState } from 'react';

// Defina o tipo de dado que será armazenado no contexto
type ListContextData = {
  items: string[];
  addItem: (item: string) => void;
};

// Crie o contexto
export const ListContext = createContext<ListContextData>({
  items: [],
  addItem: () => { },
});

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>([]);

  const addItem = (item: string) => {
    setItems(prevItems => [...prevItems, item]);
  };

  return (
    <ListContext.Provider value={{ items, addItem }}>
      {children}
    </ListContext.Provider>
  );
};