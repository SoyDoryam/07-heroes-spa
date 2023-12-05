import { Navigate, Route, Routes } from "react-router-dom";

import { MarvelPage, DcPage } from "../heroes";
import { LoginPage } from "../auth";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
        {/* Navbar es importado de "../ui" y se coloca al inicio de la aplicación */}
        <Navbar />

        {/* Definición de las rutas usando el componente Routes */}
        <Routes>
            {/* Ruta para la página de Marvel */}
            <Route path="marvel" element={<MarvelPage />} />

            {/* Ruta para la página de DC */}
            <Route path="dc" element={<DcPage />} />

            {/* Ruta para la página de Login */}
            <Route path="login" element={<LoginPage />} />

            {/* Ruta por defecto que redirige a la página de Marvel */}
            <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
    </>
  )
}
