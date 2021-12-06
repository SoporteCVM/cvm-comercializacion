import React, { useState } from "react";
import venezuela from "venezuela"; 

import StateList from "./StateList"
import TownList from "./TownList";
import ParishList from "./ParishList";

export const ComApp = () => {

  const ve = venezuela;

  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [parish, setParish] = useState("");

  console.log(ve.pais)
  console.log(ve.estado("Amazonas"))
  console.log(ve.estado(state || "Anzoátegui", {municipios: true}).municipios);

  return (
    <div>
      <StateList
        title="estado"
        data={ve.pais}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
   {state && (
        <TownList
          title="municipios"
          data={ve.estado(state, {municipios: true}).municipios}
          handleChange={(e) => {
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
      <pre>
        <code>
          {state} - {town} - {parish}
        </code>
      </pre>
    </div>
  );
}

