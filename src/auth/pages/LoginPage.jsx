// Importación del hook useNavigate desde React Router Dom
import { useNavigate } from 'react-router-dom';

// Componente funcional para la página de Login
export const LoginPage = () => {

  // Utilización del hook useNavigate para la navegación
  const navigate = useNavigate();

  // Función para manejar el evento de login y redireccionar a la página principal
  const onLogin = () => {
    navigate('/', {
      replace: true // Reemplazar la entrada en el historial de navegación
    });
  }

  // Estructura JSX del componente LoginPage
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      {/* Botón de login con evento onClick que llama a la función onLogin */}
      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>

    </div>
  )
}