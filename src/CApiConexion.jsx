import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
export default function CApiConexion(props) {
    const { isClicked, toggleDarkMode } = useContext(ThemeContext);
    function darkmode() {
        let result = isClicked ? 'darktext' : 'daytext';
        return result;
    }
    return (
        <div className='mt-3'>
            <div className='container-fluid mx-auto g-0 mt-0 bg-secondary rounded'>
                <div className={`container-fluid p-0 border d-flex flex-row flex-wrap row-cols-1 row-cols-sm-2 text-center   ${darkmode()}`}>
                    <div className='col mt-0  border '>

                        <p className="mb-3 text-dark fs-1 fw-bold " >Detalles del Clima</p>
                        <h4 className="">
                            {props.info.location.name}
                        </h4>

                        <div className='d-flex align-items-center my-4 content justify-content-center justify-content-sm-start justify-content-md-center mt-5'>
                            <img className='w-auto ms-sm-4 ms-md-0 mt-2 mb-4' src={props.info.current.condition.icon} alt="i" />
                            <h5 className=" fs-1 ms-3 ms-md-0">
                                {props.info.current.temp_c}ºc
                            </h5>
                        </div>
                    </div>
                    <div className='col text-center fs-5 border'>
                        <p className="card-text fs-1 text-dark fw-bold mt-0">Estado Actual</p>
                        <p className="card-text"><b>Sensación térmica:</b> {props.info.current.windchill_c} ºc</p>
                        <p className="card-text"><b>Humedad:</b> {props.info.current.humidity}% </p>
                        <p className="card-text"><b>Velocidad del viento: </b>{props.info.current.wind_kph} km/h</p>
                        <p className="card-text"><b>Nubosidad:</b> {props.info.current.cloud}% </p>
                        <p className="card-text"><b>Presipitación: </b>{props.info.current.precip_mm} mm</p>
                        <p className="card-text"><b>Última actualización: </b>{props.info.current.last_updated} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
