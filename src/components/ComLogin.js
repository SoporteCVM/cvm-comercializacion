import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { LoginForm } from "./LoginForm";
import { Sidebar } from "./Sidebar";

export const ComLogin = () => {
  return (
    <Box>
      <Box bg="#eee" h="100vh">
        <Sidebar />
        <LoginForm />
      </Box>
    </Box>
  );
};
