import { Box, Button, Stack } from "@chakra-ui/react";
import { FiLogIn } from "react-icons/fi";
import React from "react";

export const Sidebar = () => {
  return (
    <Box w="20%" h="100vh" bg="white">
      <Stack spacing={4} direction={"column"} p={3} flex="1">
        <Button leftIcon={<FiLogIn />} bg="#809143">
          Iniciar sesión
        </Button>
        <Button leftIcon={<FiLogIn />} bg="#809143">
          Registrarse
        </Button>
      </Stack>
    </Box>
  );
};
