import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

interface ButtonCardProps extends ButtonProps {
  text: string;
}

export const ButtonCard = ({ text, ...rest }: ButtonCardProps) => {
  return (
    <Button {...rest}>
      {text}
      <Icon as={BsArrowRightShort} fontSize="32" color="pink.500" />
    </Button>
  );
};
