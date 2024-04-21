import { Button } from "@mui/material";
import { Container } from "./styles";

interface ItemListProps {
  items: string[];
  handleDelete: (item: string) => void;
}
export function ItemList({ items, handleDelete }: ItemListProps) {
  return (
    <Container>
      {items.map((item) => (
        <li
          key={item}
        >
          {item}
          <Button color="error" onClick={() => handleDelete(item)} >
            x
          </Button>
        </li>
      ))}
    </Container>
  );
}