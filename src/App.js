import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


import Navegacion from './Cnavegacion';
import Cpopulares from './Cpopulares';
import Cinicio from './Cinicio';
import Cfooter from './Cfooter';
import CdetallesClima from './CdetallesClima';

import { ThemeProvider } from './ThemeProvider'
import { AppProvider } from './BusquedaContext';
import { CiudadesProvider } from './CciudadesContext';
import { AppProviderCiudad } from './CciudadContext';

function App() {
   let ciudades = [];
  return (
    <ThemeProvider>
      <AppProvider>
      <AppProviderCiudad>
        <CiudadesProvider>
          <Router>
            <div className='d-flex flex-column h-100'>
              <Navegacion />
              <Routes>
                {console.log("estoy en el principal")}
                <Route path="/" element={<Cinicio />} />
                <Route path="/populares" element={<Cpopulares ciudades={ciudades} />} />
                <Route path="/detallesClima" element={<CdetallesClima />} />
              </Routes>
              <Cfooter />
            </div>
          </Router>
        </CiudadesProvider>
        </AppProviderCiudad>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
