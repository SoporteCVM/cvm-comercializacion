import { Box, Button, Stack } from "@chakra-ui/react";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { Image, Divider } from "@chakra-ui/react";
import { RegisterForm } from "./RegisterForm";
import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
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
        <Link to="/">
          <Image
            src="http://gestrc.cvm.com.ve/material/img/Logo.png"
            alt="Corporación Venezolana de Minería"
            width="60%"
            my="15px"
            ml="50px"
          />
        </Link>
        <Divider colorScheme="black" />
        <Button
          leftIcon={<FiLogIn />}
          bg="#809143"
          w="80%"
          boxShadow="base"
          py={15}
          pl={10}
          pr={10}
        >
          <Link to="/login">Iniciar sesión</Link>
        </Button>
        <Button
          leftIcon={<FiUserPlus />}
          bg="#809143"
          w="80%"
          boxShadow="base"
          py={15}
          pl={10}
          pr={10}
        >
          <Link to="/register">Registrarse</Link>
        </Button>
      </Stack>
    </Box>
  );
};
