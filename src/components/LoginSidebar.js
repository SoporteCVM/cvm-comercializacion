import { Box, Button, Stack } from "@chakra-ui/react";
import { FiLogIn } from "react-icons/fi";
import React from "react";

export const LoginSidebar = () => {
  return (
    <Box w="20%" h="100vh" bg="white">
      <Stack spacing={4} direction={"column"} p={3} flex="1">
        <Button leftIcon={<FiLogIn />} bg="#809143">
          Registro de datos
        </Button>
        <Button leftIcon={<FiLogIn />} bg="#809143">
          Comprobante de movilización
        </Button>
      </Stack>
    </Box>
  );
};
