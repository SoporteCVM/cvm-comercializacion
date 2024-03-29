import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Box,
  Button,
  Textarea,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
  Input,
  Heading,
  Select,
} from "@chakra-ui/react";
import venezuela from "venezuela";

export const ComForm = () => {
  const ve = venezuela;
  const { pais: estado } = ve;

  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);

  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  // eslint-disable-next-line
  const [parish, setParish] = useState("");

  const [actValue, setActValue] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  let municipios = ve.estado(state, {
    municipios: true,
  }).municipios;
  let parroquia = ve.municipio(town, { parroquias: true }).parroquias;

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box m={4}>
        <Heading as="h3" size="md" mb={4} isTruncated>
          Datos de la Empresa
        </Heading>

        <Stack spacing={4} direction={"row"} p={3} flex="1">
          <Input
            placeholder="Nombre de la Empresa"
            id="empresa"
            name="empresa"
            size="md"
            boxShadow="xs"
            {...register("nombre")}
          />
          <Input
            placeholder="RIF"
            size="md"
            id="rif"
            name="rif"
            boxShadow="xs"
            {...register("rif")}
          />
          <Input
            placeholder="Número de alianza"
            id="numalianza"
            name="numalianza"
            size="md"
            boxShadow="xs"
            {...register("numalianza")}
          />
          <Input
            placeholder="Dirección fiscal"
            id="dirfiscal"
            name="dirfiscal"
            size="md"
            boxShadow="xs"
            {...register("dirfiscal")}
          />
        </Stack>

        <Stack spacing={4} direction={"column"} p={3} flex="1">
          <Select
            {...register("estado")}
            onChange={(e) => {
              setTown("");
              setParish("");
              setState(e.target.value);
              setTown("");
            }}
          >
            <option value="">Elige un estado</option>
            {estado.map((el) => (
              <option key={el.id_estado} value={el.estado}>
                {el.estado}
              </option>
            ))}
          </Select>
          {state && (
            <Select
              {...register("municipio")}
              onChange={(e) => {
                setParish("");
                setTown(e.target.value);
              }}
              w={100}
            >
              <option value="">Elige un municipio</option>
              {municipios.map((el, index) => (
                <option key={index} value={el}>
                  {el}
                </option>
              ))}
            </Select>
          )}
          {town && (
            <Select
              {...register("parroquia")}
              onChange={(e) => {
                setParish(e.target.value || "");
              }}
            >
              <option value="">Elige una parroquia</option>
              {parroquia.map((el, index) => (
                <option key={index} value={el}>
                  {el}
                </option>
              ))}
            </Select>
          )}
        </Stack>
      </Box>

      <Box m={4}>
        <Heading as="h3" size="md" mb={4} isTruncated>
          Datos del Representante
        </Heading>
        <Stack spacing={4} direction={"row"} p={3} flex="1">
          <Input
            placeholder="Representante"
            size="md"
            boxShadow="xs"
            {...register("representante")}
          />
          <Input
            placeholder="Número de teléfono"
            size="md"
            boxShadow="xs"
            {...register("rnumtelefono")}
          />
          <Input
            placeholder="Email"
            size="md"
            boxShadow="xs"
            {...register("rcorreo")}
          />
          <Input
            placeholder="Número de cédula"
            size="md"
            boxShadow="xs"
            {...register("rcedula")}
          />
          <Input
            placeholder="RUM"
            size="md"
            boxShadow="xs"
            {...register("rrum")}
          />
        </Stack>
      </Box>

      <Box m={4}>
        <Heading as="h3" size="md" mb={4} isTruncated>
          Tipo de Actividad
        </Heading>
        <RadioGroup onChange={setActValue} value={actValue}>
          <Stack spacing={4} direction={"column"} p={3} flex="1">
            <Radio {...register("actividad")} value="compra">
              Compra/Venta
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box m={4}>
        <Heading as="h3" size="md" mb={4} isTruncated>
          Actividad Minera
        </Heading>
        <Stack spacing={4} direction={"row"} p={3} flex="1">
          <Checkbox {...register("activmin")} value="oro" colorScheme={"green"}>
            Oro
          </Checkbox>
          <Checkbox
            {...register("activmin")}
            value="diamante"
            colorScheme={"green"}
          >
            Diamante
          </Checkbox>
          <Checkbox
            {...register("activmin")}
            value="coltan"
            colorScheme={"green"}
          >
            Coltán
          </Checkbox>
          <Checkbox
            {...register("activmin")}
            value="plata"
            colorScheme={"green"}
          >
            Plata
          </Checkbox>
          <Checkbox
            {...register("activmin")}
            value="calsiterita"
            colorScheme={"green"}
          >
            Casiterita
          </Checkbox>
        </Stack>
        <Textarea
          {...register("descactivmin")}
          placeholder="Breve descripción de su actividad minera"
        />
      </Box>

      <Box m={4}>
        <Button colorScheme="green" variant="solid" type="submit">
          Enviar
        </Button>
      </Box>
    </form>
  );
};
