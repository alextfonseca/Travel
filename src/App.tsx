import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { TiWaves } from "react-icons/ti";

import { Plans } from "./components/Plans";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Form } from "./components/form/Input";
import { TextArea } from "./components/form/TextArea";
import { ButtonCard } from "./components/ButtonCard";

function App() {
  return (
    <div className="App">
      <Box width="100%" bg="gray.800" p="2">
        <Text px="4" maxWidth="80%" m="auto">
          Novos pacotes todas as semanas
        </Text>
      </Box>

      <Box maxWidth="80%" m="auto">
        <Header />
      </Box>
      <main>
        <Introduction />
        <Box width="100%" align="center">
          <Icon as={TiWaves} fontSize="100" color="cyan.900" />
          <Icon as={TiWaves} fontSize="100" color="cyan.900" />
          <Icon as={TiWaves} fontSize="100" color="cyan.900" />
        </Box>

        <Plans />

        <Image
          width="100%"
          maxHeight="500px"
          mt="8"
          src="/bg-intro.jpg"
          alt="imagem de uma viagem"
        />

        <Box maxWidth="80%" m="auto">
          <Text
            as="h2"
            color="pink.500"
            mt="8"
            fontSize="48"
            fontWeight="bold"
            textAlign="center"
          >
            Contato
          </Text>

          <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap="10" mt="4">
            <Box as="form">
              <Stack spacing="4">
                <Form
                  name="name"
                  type="text"
                  label="Nome completo"
                  placeholder="Nome Completo"
                />

                <Form
                  name="email"
                  type="email"
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                />

                <TextArea
                  name="message"
                  placeholder="Digite sua mensagem"
                  label="Mensagem"
                />
              </Stack>
              <ButtonCard
                text="Enviar mensagem"
                bg="cyan.500"
                mt="8"
                fontSize="20"
                size="lg"
                _hover={{
                  bg: "cyan.700",
                }}
              />
            </Box>

            <Center height="100%">
              <Divider orientation="vertical" borderColor="gray.700" />
            </Center>
            <Box>
              <Text fontSize="26" fontWeight="bold">
                Endereço
              </Text>

              <Text fontSize="16">Rua São Paulo , número 28</Text>
              <Text fontSize="16">São Paulo</Text>
              <ButtonCard
                text="Ver no mapa"
                bg="transparent"
                mt="2"
                fontSize="20"
                _hover={{
                  bg: "transparent",
                  color: "pink.500",
                }}
              />
              <Divider borderColor="gray.700" my="2" />

              <Text fontSize="26" fontWeight="bold">
                E-mail e Telefone
              </Text>

              <Text fontSize="16">(11) 4817-4900</Text>
              <Text fontSize="16">travel@gmail.com</Text>

              <Divider borderColor="gray.700" my="2" />

              <Text fontSize="26" fontWeight="bold">
                Horários
              </Text>

              <Text fontSize="16">De Sexta à Sábado</Text>
              <Text fontSize="16">Das 07:00 às 16:00</Text>
            </Box>
          </Grid>
        </Box>
      </main>

      <Flex
        as="footer"
        bg="cyan.700"
        width="100%"
        p="7"
        mt="20"
        display="flex"
        justifyContent="space-between"
        align="center"
      >
        <Text fontSize="40" fontWeight="bold" letterSpacing="tight">
          Travel
          <Text as="span" color="pink.500" ml="1">
            .
          </Text>
        </Text>
        <Text textAlign="right">todos os direitos reservados</Text>
      </Flex>
    </div>
  );
}

export default App;
