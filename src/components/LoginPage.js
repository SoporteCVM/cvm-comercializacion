import React from "react";
import { Box, Heading, Image, VStack } from "@chakra-ui/react";

export const LoginPage = () => {
  return (
    <Box ml="260px">
      <Box p={8}>
        <VStack direction={"row"} p={10}>
          <Heading as="h3" size="md" mb={8} isTruncated>
            Bienvenido usuario.
          </Heading>
          <Image src="http://gestrc.cvm.com.ve/material/img/Logo.png" />
        </VStack>
      </Box>
    </Box>
  );
};
