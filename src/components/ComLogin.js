import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { Sidebar } from "./Sidebar";

export const ComLogin = () => {
  const [loginState, setLoginState] = useState("login");
  return (
    <Box>
      <Box bg="#eee" h="100vh">
        <Sidebar />
        <LoginForm />
      </Box>
    </Box>
  );
};
