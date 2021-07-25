import { List } from "@chakra-ui/react";
import { BsCircle } from "react-icons/bs";
import { ListItens } from "../ListItens";

export const ListCardDuo = () => {
  return (
    <List spacing={3} mt="2" px={["4", "8"]}>
      <ListItens
        text="9 noites"
        icon={BsCircle}
        fontSize="20"
        color="gray.700"
        colorIcon="pink.500"
      />

      <ListItens
        text="Almoço e jantar"
        icon={BsCircle}
        fontSize="20"
        color="gray.700"
        colorIcon="pink.500"
      />

      <ListItens
        text="Hotel de frente para praia"
        icon={BsCircle}
        fontSize="20"
        color="gray.700"
        colorIcon="pink.500"
      />

      <ListItens
        text="Passagem de ida e volta"
        icon={BsCircle}
        fontSize="20"
        color="gray.700"
        colorIcon="pink.500"
      />
    </List>
  );
};
