// Importa la función getHeroesByPublisher desde el archivo de helpers
import { getHeroesByPublisher } from "../helpers";

// Define el componente funcional HeroList que recibe la propiedad 'publisher'
export const HeroList = ({ publisher }) => {
  // Obtiene la lista de héroes filtrada por el 'publisher' utilizando la función getHeroesByPublisher
  const heroes = getHeroesByPublisher(publisher);

  // Retorna la estructura del componente HeroList
  return (
    <>
      {/* Lista desordenada para mostrar los nombres de los superhéroes */}
      <ul>
        {/* Mapea sobre la lista de héroes y muestra cada nombre como un elemento de lista */}
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.superhero}</li>
        ))}
      </ul>
    </>
  );
};
