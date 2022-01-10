import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Stack,
  Center,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const [loginValues, setLoginValues] = useState([{ email: "", password: "" }]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box ml="260px">
      <Box p={8}>
        <Center>
          <Heading as="h3" size="md" mb={4} isTruncated>
            Iniciar sesión
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
            {...register("password")}
          />
        </Stack>
        <Center mt="8px">
          <Button colorScheme="green" variant="solid" type="submit">
            Enviar
          </Button>
        </Center>
      </Box>
    </Box>
  );
};
