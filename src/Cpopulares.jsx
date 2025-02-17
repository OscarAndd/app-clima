import React from 'react'
import CciudadesDefault from './CciudadesDefault'
import { useContext } from 'react';
import { CiudadesContext } from './CciudadesContext';
import { ThemeContext } from './ThemeProvider';


export default function Cpopulares(props) {
    const { isClicked, toggleDarkMode } = useContext(ThemeContext);

    function darkmode() {
        let result = isClicked ? 'darktext' : 'daytext';
        return result;
    }

    const { ciudades, setCiudades } = useContext(CiudadesContext);
    const ciudadesLength = ciudades ? ciudades.length : 0;
    console.log(ciudades);
    
    function handleButtonClick(ciudad) {
        // console.log(`Botón clicado para la ciudad: ${ciudad}`);
    }
        return (
        <div className={`container align-content-start mt-5 flex-grow-1 ${darkmode()}`}>
          <div className={`mt-5 text-center `}><h1>Aqui podrás ver tus ciudades preferidas</h1></div>
            <div className={` row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 mt-5 justify-content-start `}>        
                {ciudadesLength ? (
                ciudades.map((ciudad, index) => (
                    <div className="col my-3" key={index}>
                        <CciudadesDefault ciudad={ciudad}  onButtonClick={handleButtonClick}/>
                    </div>
                ))) :( 
                    <div className='fs-2 text-center mx-auto'>
                        <p>No hay ciudades para mostrar</p>
                    </div>)
                }
            </div>
        </div>
    )
}