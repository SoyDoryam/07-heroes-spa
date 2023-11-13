// Importa los componentes necesarios de react-router-dom
import { Navigate, Route, Routes } from "react-router-dom"

// Importa los componentes de las páginas necesarios
import { MarvelPage } from "../heroes/pages/MarvelPage"
import { DcPage } from "../heroes/pages/DCPage"
import { LoginPage } from "../auth/pages/LoginPage"

// Define el componente principal del router de la aplicación
export const AppRouter = () => {
  return (
    <>
        {/* Utiliza el componente 'Routes' para definir las rutas */}
        <Routes>
            {/* Ruta para la página de Marvel, renderiza el componente 'MarvelPage' */}
            <Route path="marvel" element={<MarvelPage />}/>
            
            {/* Ruta para la página de DC, renderiza el componente 'DcPage' */}
            <Route path="dc" element={<DcPage/>}/>
            
            {/* Ruta para la página de login, renderiza el componente 'LoginPage' */}
            <Route path="login" element={<LoginPage/>}/>
            
            {/* Ruta por defecto, redirige a la página de Marvel */}
            <Route path="/" element={<Navigate to="/marvel"/>}/>
        </Routes>
    </>
  )
}
