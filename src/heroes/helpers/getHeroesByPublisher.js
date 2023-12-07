// Importamos el array de héroes desde el archivo de datos
import { heroes } from '../data/heroes';

// Definimos una función que filtra héroes según la editorial
export const getHeroesByPublisher = (publisher) => {
    // Definimos las editoriales válidas
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    // Verificamos si la editorial proporcionada es válida
    if (!validPublishers.includes(publisher)) {
        // Si no es válida, lanzamos un error con un mensaje descriptivo
        throw new Error(`${publisher} is not a valid publisher`);
    }

    // Filtramos el array de héroes para obtener solo aquellos de la editorial especificada
    return heroes.filter(heroe => heroe.publisher === publisher);
};
