import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  // Obtiene los parámetros de la URL, en este caso, el 'id' del héroe.
  const { id } = useParams();

  // Utiliza la función getHeroById para obtener la información del héroe según su 'id'.
  const hero = getHeroById(id);

  // Si no se encuentra información del héroe, redirige al usuario a la página de Marvel.
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  // Si se encuentra información del héroe, muestra su nombre en un elemento <h1>.
  return (
    <h1>{hero.superhero}</h1>
  );
};
