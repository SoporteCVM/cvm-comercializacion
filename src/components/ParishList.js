import React from "react";

import { Select } from '@chakra-ui/react'

const ParishList = ({ title, data, handleChange }) => {

  let options = data;

  return (
      <Select name={title} id={title} onChange={handleChange}>
        <option value="">Elige una {title}</option>
        {
          options.map((el) => (
            <option value={el}>
              {el}
            </option>
          ))}
      </Select>
  );
};

export default ParishList;