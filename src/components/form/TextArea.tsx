import {
  FormControl,
  TagLabel,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";

interface TextareaFormProps extends TextareaProps {
  name: string;
  placeholder: string;
  label: string;
}

export const TextArea = ({
  name,
  placeholder,
  label,
  ...rest
}: TextareaFormProps) => {
  return (
    <FormControl>
      <TagLabel>{label}</TagLabel>
      <Textarea
        name={name}
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
