import { Box, Button, Stack, Image, Divider } from "@chakra-ui/react";
import { AiFillProfile, AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import React from "react";

export const LoginSidebar = () => {
  return (
    <Box
      position="fixed"
      w="260px"
      h="100vh"
      mt="0px"
      bg="white"
      boxShadow="dark-lg"
    >
      <Stack spacing={4} direction={"column"} p={3} flex="1" align={"center"}>
        <Image
          src="http://gestrc.cvm.com.ve/material/img/Logo.png"
          alt="Corporación Venezolana de Minería"
          width="60%"
          my="15px"
        />
        <Divider colorScheme="black" />

        <Button
          leftIcon={<AiFillProfile />}
          bg="#809143"
          w="90%"
          boxShadow="base"
          py={15}
          pl={10}
          pr={10}
        >
          <Link to="/comregister">Registro de datos</Link>
        </Button>

        <Button
          leftIcon={<AiFillCheckCircle />}
          bg="#809143"
          w="90%"
          boxShadow="base"
          py={15}
          pl={10}
          pr={10}
        >
          <Link to="/status">Estado de comprobante</Link>
        </Button>
      </Stack>
    </Box>
  );
};
