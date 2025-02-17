import React, { createContext, useState } from 'react';

export const CiudadContext = createContext();

export const AppProviderCiudad = ({ children }) => {
  const [ciudad, setCiudad] = useState("");
  
  return (
    <CiudadContext.Provider value={{ ciudad, setCiudad}}>
      {children}
    </CiudadContext.Provider>
  );
};
