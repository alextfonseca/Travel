import {
  AspectRatio,
  Box,
  Divider,
  Image,
  List,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import {
  RiChatSmile2Line,
  RiMapPin2Line,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { ListItens } from "./ListItens";

export const Introduction = () => {
  const isWideVersion = useBreakpointValue({ base: false, xl: true });

  const travelPhotoLink =
    "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";
  return (
    <Stack
      maxWidth="80%"
      m="auto"
      mt="4"
      direction="row"
      spacing="100"
      justify="space-between"
    >
      {isWideVersion && (
        <Box height="100vh" width="100%">
          <Image
            width="100%"
            src={travelPhotoLink}
            alt="foto de uma viagem"
            borderRadius="1"
          />

          <AspectRatio ratio={15 / 9} mt="-50%">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
              title="Localização das nossas agências"
            />
          </AspectRatio>
        </Box>
      )}

      <Box maxWidth="100%">
        <Text fontSize={["28", "48"]} align="center">
          Escolha a melhor agência e tenha a melhor{" "}
          <Text as="span" color="pink.500" fontWeight="bold">
            Viagem
          </Text>
        </Text>

        <List spacing={3} mt="10">
          <ListItens
            text="Agências em diversas cidades"
            icon={RiMapPin2Line}
            fontSize="20"
          />

          <Divider my="6" borderColor="gray.700" />

          <ListItens
            text="Melhores preços"
            icon={RiMoneyDollarCircleLine}
            fontSize="20"
          />

          <Divider my="6" borderColor="gray.700" />

          <ListItens
            text="Pacotes para família toda"
            icon={RiChatSmile2Line}
            fontSize="20"
          />
        </List>

        <Text mt={["5", "20"]} fontSize="22" width="100%" color="gray.200">
          Sejam viagens curtas ou internacionais, todas formas de viagem são
          benéficas para nossa vida e ajudam no aumento da expectativa de vida.
          Estudos mostram que viajar reduz o stress, mantém seu corpo e mente
          saudáveis e melhora sua saúde mental. Soma-se a tudo isso uma maior
          chance de viver mais e curtir a vida viajando.
        </Text>
      </Box>
    </Stack>
  );
};
