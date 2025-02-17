//rfc
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';
import { BusquedaContext } from './BusquedaContext';
import Cbuscar from './Cbuscar';
export default function Navegacion() {
    
    const { isClicked, toggleDarkMode } = useContext(ThemeContext);
    const navbarCollapseRef = useRef(null);
    function darkmode() {
        let result = isClicked ? 'darktext' : 'daytext';
        return result;
    }
    function darkmodeicon() {
        let result = isClicked ? 'darkicon' : 'dayicon';
        return result;
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (navbarCollapseRef.current && !navbarCollapseRef.current.contains(event.target)) {
            const bsCollapse = new window.bootstrap.Collapse(navbarCollapseRef.current, {
              toggle: false
            });
            bsCollapse.hide();
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-secondary w-100 fixed-top" >
                <div className="container-fluid ">
                    <Link to="/" className="navbar-brand mx-1 me-md-3 me-lg-5 ">
                        {/* <Link> */}
                        <i className={`bi bi-hurricane fs-1  ${darkmode()}`}></i>
                        {/* </Link> */}
                    </Link>
                    <div >
                        <button onClick={toggleDarkMode} className={`nav-item btn  my-0 py-auto  my-sm-0 ms-sm-1 ms-md-2 ms-lg-3 ms-xl-4 d-sm-none ${darkmode()}`} type="button">
                            {isClicked ? "☼" : "☾"}
                        </button>

                        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId">
                            <span className={`navbar-toggler-icon ${darkmodeicon()}`} />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="collapsibleNavId" ref={navbarCollapseRef}>
                        <ul className="navbar-nav me-auto ms-0 ms-sm-3 pb-1">
                            <li className="nav-item me-3">
                            <Link className={`nav-link fs-3  mx-sm-0 mx-md-3 mx-lg-4 px-sm-0 text-decoration-underline ${darkmode()}`} to="/">
                                Home
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className={` ms-sm-1 nav-link fs-3 mx-sm-0 mx-sm-2 mx-lg-4 px-sm-0 text-decoration-underline ${darkmode()}`} to="/populares">
                                Preferidas
                            </Link>
                            </li>
                        </ul>
                        <div className="d-flex flex-row flex-nowrap mt-sm-0  align-items-center gap-1 ">
                            <Cbuscar/>
                        </div>
                        <button onClick={toggleDarkMode} className={`nav-item btn btn-outline-primary my-2 me-0 my-sm-0 ms-sm-1 ms-md-2 ms-lg-3 ms-xl-4 d-none d-sm-block  ${darkmode()}`} type="button">
                            {isClicked ? "☼" : "☾"}
                        </button>
                    </div>

                </div>
            </nav>
        </div>
    )
}
