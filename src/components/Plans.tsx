import { Box, Text, Flex } from "@chakra-ui/react";

import { Cards } from "./card";

export const Plans = () => {
  return (
    <Flex width="100%" bg="gray.800">
      <Box maxWidth={1440} m="auto" pb="10">
        <Text
          align="center"
          color="pink.500"
          py="10"
          fontSize="48"
          fontWeight="bold"
        >
          Planos
        </Text>
        <Cards />
      </Box>
    </Flex>
  );
};
