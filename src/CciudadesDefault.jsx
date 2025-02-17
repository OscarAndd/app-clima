import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';
import { CiudadContext } from './CciudadContext';
export default function CciudadesDefault(props) {
    const { isClicked, toggleDarkMode } = useContext(ThemeContext);
    const navigate = useNavigate();
    const { ciudad, setCiudad } = useContext(CiudadContext);
    function darkmode() {
        let result = isClicked ? 'darktext' : 'daytext';
        return result;
    }
    function handleClick() {
        console.log("LLAMADA A LA API DESDE POPULARES");
        setCiudad(props.ciudad);
        console.log(props.ciudad);
        props.onButtonClick(props.ciudad);
        navigate('/detallesClima');

        // navigate('/detallesClima', { state: { ciudad: props.ciudad } });
        //navigate(ruta, datos que se quieren pasar a esa url (opcional))
    }
    return (
        <>
            <div className={`d-flex flex-wrap border-bottom  border-secondary justify-content-around py-1 text-center text-sm-start fs-3 ${darkmode()}`}>
                <p className={`flex-grow-1 my-0 ms-1 `} >{props.ciudad}</p>
                {/* <Link to="/detallesClima"> */}
                    <button onClick={handleClick} className='btn btn-primary '>Ver clima</button>
                {/* </Link> */}

            </div>
        </>
    )
}
