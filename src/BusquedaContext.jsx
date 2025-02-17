import React, { createContext, useState } from 'react';

// Crear el contexto
export const BusquedaContext = createContext();

// Crear el proveedor de contexto
export const AppProvider = ({ children }) => {
  const [salida, setSalida] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [ciudadIngresada, setCiudadIngresada] = useState("");
  const [ciudadValida, setCiudadValida] = useState(true);
  return (
    <BusquedaContext.Provider value={{ salida, setSalida, resultado, setResultado, ciudadIngresada, setCiudadIngresada,ciudadValida, setCiudadValida }}>
      {children}
    </BusquedaContext.Provider>
  );
};