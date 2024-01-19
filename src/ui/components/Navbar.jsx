// Importaciones necesarias de React Router Dom
import { Link, NavLink, useNavigate } from 'react-router-dom';

// Componente funcional para la barra de navegación
export const Navbar = () => {

    // Utilización del hook useNavigate para la navegación
    const navigate = useNavigate();

    // Función para manejar el evento de logout y redireccionar a la página de login
    const onLogout = () => {
        navigate('/login', {
            replace: true // Reemplazar la entrada en el historial de navegación
        });
    }

    // Estructura JSX del componente Navbar
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            {/* Enlace para regresar a la página principal */}
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            {/* Menú de navegación con enlaces NavLink para las páginas de Marvel y DC */}
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {/* NavLink para la página de Marvel */}
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}` } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    {/* NavLink para la página de DC */}
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active ': ''}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    
                    {/* NavLink para la página de Search */}
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active ': ''}`} 
                        to="/Search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            {/* Sección de usuario y botón de logout */}
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    {/* Mostrar el nombre del usuario (ejemplo: Dorian) */}
                    <span className="nav-item nav-link text-primary">
                        Dorian 
                    </span>

                    {/* Botón de logout con evento onClick que llama a la función onLogout */}
                    <button 
                        className="nav-item nav-link btn"
                        onClick={onLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}
