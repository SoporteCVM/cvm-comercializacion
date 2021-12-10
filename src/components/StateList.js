import React from "react";

import { Select } from '@chakra-ui/react'

const StateList = ({ title, data, handleChange }) => {

  let options = data;

  return (
      <Select name={title} id={title} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {
          options.map((el) => (
            <option key={el.id_estado} value={el.estado}>
              {el.estado}
            </option>
          ))}
      </Select>
  );
};

export default StateList;