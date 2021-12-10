import React, { useState } from "react";
import { useFormik } from "formik";

import { Box, Button, Textarea, Checkbox, Radio, RadioGroup, Stack, Input, Heading} from "@chakra-ui/react"
import venezuela from "venezuela"; 

import StateList from "./StateList"
import TownList from "./TownList";
import ParishList from "./ParishList";

export const ComForm = () => {

  const ve = venezuela;

  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [parish, setParish] = useState("");

  const [actValue, setActValue] = useState("");

  const formik = useFormik({
    initialValues: {
      empresa: '',
      rif: '',
      numalianza: '',
      dirfiscal: '',
      estado: '',
      municipios: '',
      parroquia: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>

      <Box m={4}>
        <Heading as="h3" size="md" mb={4} isTruncated>Datos de la Empresa</Heading>
        
        <Stack spacing={4} direction={"row"} p={3} flex="1">
          <Input placeholder='Nombre de la Empresa' id="empresa" name="empresa" size='md' boxShadow='xs' onChange={formik.handleChange}
         value={formik.values.empresa} />
          <Input placeholder='RIF' size='md' id="rif" name="rif" boxShadow='xs' onChange={formik.handleChange}
         value={formik.values.rif} />
          <Input placeholder='Número de alianza' id="numalianza" name="numalianza" size='md' boxShadow='xs' onChange={formik.handleChange}
         value={formik.values.numalianza}/>
          <Input placeholder='Dirección fiscal' id="dirfiscal" name="dirfiscal" size='md' boxShadow='xs' onChange={formik.handleChange}
         value={formik.values.dirfiscal} />
        </Stack>

        <Stack spacing={4} direction={"column"} p={3} flex="1">
            <StateList
            title="estado"
            data={ve.pais}
            handleChange={(e) => {
              setTown("");
              setParish("");
              setState(e.target.value);
              setTown("");
            }}
            />
           {state && (
            <TownList
              title="municipio"
              data={ve.estado(state, {municipios: true}).municipios}
              handleChange={(e) => {
                setParish("");
                setTown(e.target.value);
              }}
            />
          )}
          
          {town && (
            <ParishList
              title="parroquia"
              data={ve.municipio(town, {parroquias: true}).parroquias}
              handleChange={(e) => {
                setParish(e.target.value);
              }}
            />
          )}
        </Stack>

      </Box>

      <Box m={4}>
        <Heading as="h3" size="md" mb={4} isTruncated>Datos del Representante</Heading>
        <Stack spacing={4} direction={"row"} p={3} flex="1">
          <Input placeholder='Representante' size='md' boxShadow='xs'/>
          <Input placeholder='Número de teléfono' size='md' boxShadow='xs' />
          <Input placeholder='Email' size='md' boxShadow='xs'/>
          <Input placeholder='Número de cédula' size='md' boxShadow='xs' />
          <Input placeholder='RUM' size='md' boxShadow='xs' />
        </Stack>

      </Box>

      <Box m={4}>
        <Heading as="h3" size="md" mb={4} isTruncated>Tipo de Actividad</Heading>
          <RadioGroup onChange={setActValue} value={actValue}>
            <Stack spacing={4} direction={"column"} p={3} flex="1">
              <Radio value="compra">Compra</Radio>
              <Radio value="venta">Venta</Radio>
            </Stack>
          </RadioGroup>
      </Box>

      <Box m={4}>
        <Heading as="h3" size="md" mb={4} isTruncated>Actividad Minera</Heading>
        <Textarea placeholder='Breve descripción de su actividad minera' />
        <Stack spacing={4} direction={"column"} p={3} flex="1">
          <Checkbox value="oro" colorScheme={"green"}>Oro</Checkbox>
          <Checkbox value="diamante" colorScheme={"green"}>Diamante</Checkbox>
          <Checkbox value="coltan" colorScheme={"green"}>Coltán</Checkbox>
          <Checkbox value="plata" colorScheme={"green"}>Plata</Checkbox>
          <Checkbox value="calsiterita" colorScheme={"green"}>Calsiterita</Checkbox>
        </Stack>
      </Box>

      <Box m={4}>
          <Button colorScheme='green' variant='solid' type="submit">
            Enviar
          </Button>
      </Box>
    </form>
  );
}

