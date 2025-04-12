import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import AboutUs from "./components/AboutUs";
import Carisma from "./views/Carisma";
import Inspiradores from "./views/Inspiradores";
import Historia from "./views/Historia";
import Centros from "./views/Centros";
import Comunidades from "./views/Comunidades";
import Noticias from "./views/Noticias";
import Descargas from "./views/Descargas";
import Politicas from "./views/Politicas"
import AvisoLegal from "./views/AvisoLegal"
function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/carisma" element={<Carisma />} />
        <Route path="/inspiradores" element={<Inspiradores />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/centros" element={<Centros />} />
        <Route path="/comunidades" element={<Comunidades />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/descargas" element={<Descargas/>} />
        <Route path="politicas" element={<Politicas/>}/>
        <Route path="avisolegal" element={<AvisoLegal/>}/>
      </Routes>
    </Router>
  );
}

export default App;