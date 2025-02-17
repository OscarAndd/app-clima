import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export default function Cfooter() {
    const { isClicked, toggleDarkMode } = useContext(ThemeContext);
    function darkmode() {
        let result = isClicked ? 'darktext' : 'daytext';
        return result;
    }
    return (
        <div>
            <div className={` container-fluid d-flex flex-wrap px-0 mt-0 mx-auto bg-secondary align-content-end justify-content-center ${darkmode()} `}>
                <p className=' my-2 me-2 '>Datos del clima proporcionados por :  </p>
                <a className='my-2 text-dark'  href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
            </div>
            </div>
    )
}
