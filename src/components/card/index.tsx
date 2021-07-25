import { Badge, Box, Divider, Grid, Icon, Text } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { ButtonCard } from "../ButtonCard";
import { ListCardDuo } from "./ListCardDuo";
import { ListCardFamily } from "./ListCardFamily";
import { ListCardIndividual } from "./ListCardIndividual";

export const Cards = () => {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr", "1fr", "repeat(3, 1fr)"]}
      gap="10"
    >
      <Box bg="whiteAlpha.900" borderRadius="1" m="auto" pb="2" maxWidth="100%">
        <Box textAlign="center">
          <Icon as={FaUserCircle} color="cyan.700" fontSize="42" mt="-5" />
        </Box>

        <Text
          textAlign="center"
          color="gray.900"
          fontSize="28"
          fontWeight="bold"
          mt="4"
        >
          Individual
        </Text>

        <Divider my="6" borderColor="gray.100" maxWidth="80%" mx="auto" />

        <ListCardIndividual />

        <Divider my="6" borderColor="gray.100" maxWidth="80%" mx="auto" />

        <Text color="cyan.500" fontSize="18" fontWeight="bold" px="8">
          R$ 10.00 \ 12x sem juros
        </Text>
        <Box align="center" mt="8">
          <ButtonCard
            text="Fazer sua reserva"
            bg="cyan.800"
            fontSize="20"
            p="6"
          />
        </Box>
      </Box>

      <Box
        bg="whiteAlpha.900"
        borderRadius="1"
        m="auto"
        pb="2"
        maxWidth="100%"
        mt={["0", "-30px"]}
      >
        <Box textAlign="center">
          <Icon as={FaUserCircle} color="cyan.700" fontSize="42" mt="-5" />
          <Icon as={FaUserCircle} color="cyan.700" fontSize="42" mt="-5" />
        </Box>

        <Badge variant="solid" colorScheme="pink" verticalAlign="center">
          Mais vendido
        </Badge>

        <Text
          textAlign="center"
          color="gray.900"
          fontSize="28"
          fontWeight="bold"
          mt="4"
        >
          Casal
        </Text>

        <Divider my="6" borderColor="gray.100" maxWidth="80%" mx="auto" />

        <ListCardDuo />

        <Divider my="6" borderColor="gray.100" maxWidth="80%" mx="auto" />

        <Text color="cyan.500" fontSize="18" fontWeight="bold" px="8">
          R$ 40.00 \ 12x sem juros
        </Text>
        <Box align="center" mt="8">
          <ButtonCard
            text="Fazer sua reserva"
            bg="cyan.800"
            fontSize="20"
            p="6"
          />
        </Box>
      </Box>

      <Box bg="whiteAlpha.900" borderRadius="1" m="auto" pb="2" maxWidth="100%">
        <Box textAlign="center">
          <Icon as={FaUserCircle} color="cyan.700" fontSize="42" mt="-5" />
          <Icon as={FaUserCircle} color="cyan.700" fontSize="42" mt="-5" />
          <Icon as={FaUserCircle} color="cyan.700" fontSize="42" mt="-5" />
        </Box>

        <Text
          textAlign="center"
          color="gray.900"
          fontSize="28"
          fontWeight="bold"
          mt="4"
        >
          Familiar
        </Text>

        <Divider my="6" borderColor="gray.100" maxWidth="80%" mx="auto" />

        <ListCardFamily />

        <Divider my="6" borderColor="gray.100" maxWidth="80%" mx="auto" />

        <Text color="cyan.500" fontSize="18" fontWeight="bold" px="8">
          R$ 100.00 \ 12x sem juros
        </Text>
        <Box align="center" mt="8">
          <ButtonCard
            text="Fazer sua reserva"
            bg="cyan.800"
            fontSize="20"
            p="6"
          />
        </Box>
      </Box>
    </Grid>
  );
};
