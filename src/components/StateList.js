import React from "react";

const StateList = ({ title, data, handleChange }) => {

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data;

  console.log(options, title, label);
  return (
    <>
      <label htmlFor={id}>{label}</label>

      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {
          options.map((el) => (
            <option key={el.id_estado} value={el.estado}>
              {el.estado}
            </option>
          ))}
      </select>
    </>
  );
};

export default StateList;