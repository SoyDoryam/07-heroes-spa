// Importamos el array de héroes desde el archivo de datos
import { heroes } from '../data/heroes';

// Definimos una función que filtra héroes según la editorial
    export const getHeroesByPublisher = (publisher) => {
        // Filtrar héroes sin repetir por nombre
    const heroesUnique = heroes.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.publisher === item.publisher)
    );

    // Mostrar solo el nombre de los héroes filtrados
    const uniquePublishers = heroesUnique.map(hero => hero.publisher.trim());
    // Definimos las editoriales válidas
    const validPublishers = [...uniquePublishers];
    // const validPublishers = ['DC Comics', 'Marvel Comics'];

    // Verificamos si la editorial proporcionada es válida
    if (!validPublishers.includes(publisher)) {
        // Si no es válida, lanzamos un error con un mensaje descriptivo
        throw new Error(`${publisher} is not a valid publisher`);
    }

    // Filtramos el array de héroes para obtener solo aquellos de la editorial especificada
    return heroes.filter(heroe => heroe.publisher === publisher);
};
