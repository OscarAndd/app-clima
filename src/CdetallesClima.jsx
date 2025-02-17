import React, { useState, useEffect } from 'react';
//import { useLocation } from 'react-router-dom';
import CApiConexion from './CApiConexion'
import { useContext } from 'react';
import { BusquedaContext } from './BusquedaContext';
import { ThemeContext } from './ThemeProvider';
import { CiudadContext } from './CciudadContext';

export default function CdetallesClima() {
    // console.log("ENTRE A DETALLES CLIMA")
    const { ciudad, setCiudad } = useContext(CiudadContext);
    const { ciudadValida, setCiudadValida ,salida, setSalida } = useContext(BusquedaContext);
    const { isClicked, toggleDarkMode } = useContext(ThemeContext);
    // console.log("he recibido el nsaje")
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const location = useLocation();
    // const { ciudad } = location.state || {};

    function darkmode() {
        let result = isClicked ? 'darktext' : 'daytext';
        return result;
    }
    
    useEffect(() => {
        const fetchData = async () => {
            
            try {
                if (ciudad) {
                    // console.log("LLAMADO API POR CIUDAD")
                    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7607b0dab6ec4bab85b164258251102&q=${ciudad}`); // Reemplaza con la URL de tu API
                    
                    if (!response.ok) {
                        throw new Error('Ciudad Ingresada no valida');
                    }
                    //console.log(response.json())
                    setCiudadValida(true);
                    const result = await response.json();
                    setData(result);
                }
            } catch (error) {
                setError(error);
                setCiudadValida(false);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // El array vacío [] asegura que useEffect se ejecute solo una vez después de que el componente se monte

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div className={`${darkmode()}`}>Error: {error.message}</div>;
    }
    return (
        <div className="containder-fluid container-lg  mx-md-auto mt-0 align-content-center flex-grow-1">
            {<CApiConexion info={data} />}
        </div>
    )
}







// import React from 'react'
// import CApiConexion from './CApiConexion'

// import { useLocation } from 'react-router-dom';
// export default function CdetallesClima(props) {
//     const location = useLocation();
//     const { ciudad } = location.state || {};
//     //En la variable ciudad guardamos los datos recibidos. la compuerta or indica que en caso que no haya
//     //llegado nada y por consiguiente sea null o undefined el dato, la variable sera igual a un objeto vacio
//     let resultado=0;
//     return (
//         <>
//             <div>
//             <h1>Detalles del Clima</h1>
//             {ciudad ? (
//                 <div> <CApiConexion consulta={ciudad}   /></div>
//             ) : (
//                 <p>No se proporcionaron datos de la ciudad.</p>
//             )}
//         </div>
//         </>

//     )
// }
