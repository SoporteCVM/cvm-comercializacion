import React, { useState } from "react";
import { Box, Button, Heading, Input, Stack, Center } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const [registerValues, setRegisterValues] = useState([
    { email: "", password1: "" },
  ]);
  const { register, handleSubmit } = useForm();

  return (
    <Box ml="260px">
      <Box p={8}>
        <Center>
          <Heading as="h3" size="md" mb={4} isTruncated>
            Registrarse
          </Heading>
        </Center>
        <Stack spacing={4} direction={"row"} p={3} flex="1" align="center">
          <Input
            placeholder="Correo electrónico"
            variant="filled"
            id="email"
            name="email"
            size="md"
            boxShadow="xs"
            {...register("email")}
          />
          <Input
            placeholder="Contraseña"
            variant="filled"
            size="md"
            id="password"
            name="password"
            boxShadow="xs"
            {...register("password1")}
          />
          <Input
            placeholder="Comprobar contraseña"
            variant="filled"
            size="md"
            id="password"
            name="password"
            boxShadow="xs"
            {...register("password2")}
          />
        </Stack>
        <Center mt="8px">
          <Button colorScheme="green" variant="solid" type="submit">
            Registrar
          </Button>
        </Center>
      </Box>
    </Box>
  );
};
