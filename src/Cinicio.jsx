// import React, { useState } from 'react'
import React, { useContext } from 'react';
import { BusquedaContext } from './BusquedaContext';
import { ThemeContext } from './ThemeProvider';
import CdetallesClima from './CdetallesClima';
import { CiudadesContext } from './CciudadesContext';
import Cbuscar from './Cbuscar';
import { Navigate, useNavigate } from 'react-router-dom';
export default function Cinicio() {
  const { salida, setSalida, resultado, setResultado, ciudadIngresada, setCiudadIngresada } = useContext(BusquedaContext);
  const { ciudadValida, setCiudadValida } = useContext(BusquedaContext);
  const { isClicked, toggleDarkMode } = useContext(ThemeContext);
  const { ciudades, setCiudades } = useContext(CiudadesContext);
  const navigate = useNavigate();
  // console.log(ciudadValida);


  function agregar() {
    if (ciudadIngresada && ciudadValida && !ciudades.includes(ciudadIngresada)) {
      setCiudades([...ciudades, ciudadIngresada]);
      console.log("ciudadIngresada:", ciudadIngresada);
      navigate('/populares');
    } else {
      console.log("La ciudad ya está en la lista o no se ha ingresado ninguna ciudad.");
    }
  }
  
  function darkmode() {
    let result = isClicked ? 'darktext' : 'daytext';
    return result;
  }

  return (
    <div className='flex-grow-1 mt-5 justify-content-center'>
      <div className='container-fluid text-center'>
        <h1 className={`mt-5  ${darkmode()}`}>Bienvenido</h1>
        <h3 className={`mt-3 w-100  mx-auto ${darkmode()}`}>
          A continuación puede escribir el nombre de una ciudad para obtener la información del clima
        </h3>

        <div className="d-flex flex-wrap mt-3  align-items-center justify-content-center gap-1">
          <Cbuscar />
        </div>

        <div >
          {salida ? (resultado) : (<p></p>)}

          {salida && ciudadValida  ? (
            <button onClick={agregar}
              className={`btn btn-primary my-2 `}
            >Agregar a Preferidos
            </button>) : (<p></p>)}

        </div>

      </div>
    </div>
  )
}
