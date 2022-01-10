import { Box } from "@chakra-ui/react";
import React from "react";
import { LoginPage } from "./LoginPage";
import { LoginSidebar } from "./LoginSidebar";

export const LoginHome = () => {
  return (
    <Box>
      <Box bg="#eee" h="100vh">
        <LoginSidebar />
        <LoginPage />
      </Box>
    </Box>
  );
};
