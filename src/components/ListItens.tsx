import { Icon, ListItem, ListItemProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface ListItensProps extends ListItemProps {
  text: string;
  colorIcon?: string;
  icon: ElementType;
}

export const ListItens = ({
  text,
  icon,
  colorIcon,
  ...rest
}: ListItensProps) => {
  return (
    <ListItem display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="15" mr="2" color={colorIcon} />
      {text}
    </ListItem>
  );
};
