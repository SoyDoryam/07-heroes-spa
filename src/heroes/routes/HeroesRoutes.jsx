import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      {/* Navbar para la navegación en el módulo de héroes */}
      <Navbar />

      {/* Contenedor para agregar estilo y separación en las rutas */}
      <div className="container">
        {/* Configuración de rutas específicas para el módulo de héroes */}
        <Routes>
          {/* Ruta para la página de Marvel */}
          <Route path="marvel" element={<MarvelPage />} />

          {/* Ruta para la página de DC */}
          <Route path="dc" element={<DcPage />} />

          {/* Ruta para la búsqueda */}
          <Route path="search" element={<SearchPage />} />

          {/* Ruta para ver un héroe por su ID */}
          <Route path="hero" element={<HeroPage />} />

          {/* Ruta por defecto: redirección a la página de Marvel */}
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
