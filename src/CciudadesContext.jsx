import React, { createContext, useState } from 'react';
// Crear el contexto
export const CiudadesContext = createContext();
// Crear el proveedor de contexto
export const CiudadesProvider = ({ children }) => {
  const [ciudades, setCiudades] = useState([]);
  return (
    <CiudadesContext.Provider value={{ ciudades, setCiudades }}>
      {children}
    </CiudadesContext.Provider>
  );
};

