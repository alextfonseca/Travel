import { Box, HStack, Link, Stack, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Stack
      direction={["column", "row"]}
      py="4"
      justify="space-between"
      align="center"
      width="100%"
    >
      <Box>
        <Text fontSize="40" fontWeight="bold" letterSpacing="tight">
          Travel
          <Text as="span" color="pink.500" ml="1">
            .
          </Text>
        </Text>
      </Box>

      <HStack as="nav" display="flex" fontSize="18" spacing={["2", "4"]}>
        <Link href="#destinos">Destinos</Link>
        <Link href="#pacotes">Pacotes</Link>
        <Link href="#contato">Contato</Link>
        <Link color="pink.500" fontSize="20" href="#pacotes">
          Compre agora
        </Link>
      </HStack>
    </Stack>
  );
};
