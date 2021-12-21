import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { ComLogin } from "./ComLogin";
import { ComForm } from "./ComForm";

export const ComApp = () => {
  return (
    <ChakraProvider>
      <ComLogin />
    </ChakraProvider>
  );
};
