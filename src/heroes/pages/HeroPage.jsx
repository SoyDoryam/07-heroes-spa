import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  // Obtiene los parámetros de la URL, en este caso, el 'id' del héroe.
  const { id } = useParams();

  // Utiliza la función useNavigate de React Router para manejar la navegación.
  const navigate = useNavigate();

  // Utiliza useMemo para memorizar el resultado de getHeroById y evitar recálculos innecesarios.
  const hero = useMemo(() => getHeroById(id), [id]);

  // Función que maneja la navegación para regresar a la página anterior.
  const onNavigateBack = () => {
    navigate(-1);
  }

  // Si no se encuentra información del héroe, redirige al usuario a la página de Marvel.
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  // Si se encuentra información del héroe, muestra la página del héroe.
  return (
    <div className="row mt-5">
      <div className="col-4">
        {/* Muestra la imagen del héroe con un formato de miniatura */}
        <img 
          src={ `/assets/heroes/${id}.jpg` }
          alt={hero.superhero} 
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        {/* Muestra el nombre del héroe en un elemento <h3> */}
        <h3>{hero.superhero}</h3>

        {/* Muestra información detallada del héroe en una lista */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> <p>{hero.alter_ego}</p></li>
          <li className="list-group-item"><b>Editor/Publisher:</b> <p>{hero.publisher}</p></li>
          <li className="list-group-item"><b>Primera aparición:</b> <p>{hero.first_appearance}</p></li>

          {/* Muestra los personajes asociados al héroe */}
          <h5 className="mt-3">Personajes:</h5>
          <p>{hero.characters}</p>

          {/* Botón para regresar a la página anterior */}
          <button 
            className="btn btn-outline-primary" 
            onClick={onNavigateBack}
          >
            Regresar
          </button>
        </ul>
      </div>
    </div>
  );
};
