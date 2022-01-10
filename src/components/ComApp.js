import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { LoginSidebar } from "./LoginSidebar";
import { ComForm } from "./ComForm";
import { ComLogin } from "./ComLogin";

export const ComApp = () => {
  return (
    <ChakraProvider>
      <ComLogin />
    </ChakraProvider>
  );
};
