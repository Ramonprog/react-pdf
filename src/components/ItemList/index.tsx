import { Button } from "@mui/material";
import { Container } from "./styles";

interface ItemListProps {
  items: string[];
}
export function ItemList({ items }: ItemListProps) {
  return (
    <Container>
      {items.map((item) => (
        <li
          key={item}
        >
          {item}
          <Button color="error">
            x
          </Button>
        </li>
      ))}
    </Container>
  );
}