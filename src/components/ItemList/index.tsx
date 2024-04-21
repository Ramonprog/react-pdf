import { Button } from "@mui/material";
import { Container } from "./styles";
import { useMarketList } from "../../hooks/useMarketList";

export function ItemList() {
  const { removeItem, items } = useMarketList()
  return (
    <Container>
      {items.map((item) => (
        <li
          key={item}
        >
          {item}
          <Button color="error" onClick={() => removeItem(item)} >
            x
          </Button>
        </li>
      ))}
    </Container>
  );
}