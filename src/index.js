import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ComApp } from "./components/ComApp";
import { LoginHome } from "./components/LoginHome";
import { ComForm } from "./components/ComForm";
import { ComRegister } from "./components/ComRegister";

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComApp />} />
        <Route path="/login" element={<ComApp />} />
        <Route path="/home" element={<LoginHome />} />
        <Route path="/register" element={<ComRegister />} />
        <Route path="/comregister" element={<ComForm />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
