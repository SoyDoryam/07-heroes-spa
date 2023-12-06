import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      {/* Definición de las rutas usando el componente Routes */}
      <Routes>
        {/* Ruta para la página de Login */}
        <Route path="login" element={<LoginPage />} />

        {/* Ruta por defecto: Se redirige a las rutas del módulo de héroes */}
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
