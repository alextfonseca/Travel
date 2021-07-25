import { FormControl, Input, InputProps, TagLabel } from "@chakra-ui/react";

interface InputFormProp extends InputProps {
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

export const Form = ({
  name,
  type,
  placeholder,
  label,
  ...rest
}: InputFormProp) => {
  return (
    <FormControl>
      <TagLabel>{label}</TagLabel>
      <Input
        name={name}
        type={type}
        focusBorderColor="pink.500"
        bgColor="gray.800"
        variant="filled"
        _hover={{
          bgColor: "gray.700",
        }}
        size="lg"
        placeholder={placeholder}
        {...rest}
      />
    </FormControl>
  );
};
