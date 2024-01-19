import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  // Obtener la lista de héroes del editor específico
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    // Utilizar la clase de Bootstrap para organizar las tarjetas en filas y columnas
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {
        // Mapear cada héroe y renderizar una tarjeta para cada uno
        heroes.map(hero => ( 
          <HeroCard 
            key={hero.id} // Utilizar el ID del héroe como clave única
            { ...hero }   // Propagar todas las propiedades del héroe como propiedades individuales
          />
        ))
      }
    </div>
  );
};
