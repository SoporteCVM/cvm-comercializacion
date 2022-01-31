import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { Sidebar } from "./Sidebar";

export const ComRegister = () => {
  const [loginState, setLoginState] = useState("login");
  return (
    <Box>
      <Box bg="#eee" h="100vh">
        <Sidebar />
        <RegisterForm />
      </Box>
    </Box>
  );
};
