import React from 'react'
import { BusquedaContext } from './BusquedaContext';
import { useContext } from 'react';
import CdetallesClima from './CdetallesClima';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';
import { CiudadContext } from './CciudadContext';
export default function Cbuscar() {

    const { ciudad, setCiudad } = useContext(CiudadContext);
    const { salida, setSalida, resultado, setResultado, ciudadIngresada, setCiudadIngresada } = useContext(BusquedaContext);
    const navigate = useNavigate();
    const { isClicked, toggleDarkMode } = useContext(ThemeContext);
    //console.log(ciudadIngresada)
    let ciudad_ingresada = "";
    function darkmode() {
        let result = isClicked ? 'darktext' : 'daytext';
        return result;
    }

    function llamarAPI(ciudad) {
        if (ciudad !== "") {
            console.log("LLAMANDO A API DESDE BOTON");
            setCiudad(ciudad);
            setResultado(<CdetallesClima />);
            console.log(resultado);
            navigate('/');
        }
    }

    function buscar() {
        console.log(ciudad_ingresada);
        if (ciudad_ingresada !== "") {
            console.log("BUSCANDO");

            setSalida(1);
            llamarAPI(ciudad_ingresada);
        }
        console.log(ciudad_ingresada);
        console.log("SALIENDO");
    }

    function entradadatos(e) {
        setSalida(0);
        ciudad_ingresada = e.target.value;
        if (e.key === "Enter") {
            if (ciudad_ingresada !== "") {
                setSalida(1);
                setCiudadIngresada(ciudad_ingresada);
                llamarAPI(ciudad_ingresada);
            }
            e.preventDefault();
        }
    }
    
    return (
        <>
            <div className='w-75 mt-0 form'>
                <input
                    onKeyUp={(e) => { entradadatos(e) }}
                    className={`form-control me-sm-2 border border-primary d-flex my-2 my-lg-0 w-100 fw-bold `}
                    type="text"
                    placeholder="Bogotá"
                    required
                />
            </div>
            <div>
                <button onClick={() => buscar()} className={`btn border-primary my-0 ${darkmode()} `} type='bottom'>
                    Buscar
                </button>
            </div>
        </>
    )
}
