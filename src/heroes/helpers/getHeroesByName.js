// Importar el array de héroes desde el archivo de datos
import { heroes } from "../data/heroes";

// Definir la función helper para filtrar héroes por nombre
export const getHeroesByName = (name = '') => {
    // Convertir el nombre a minúsculas y eliminar espacios al principio y al final
    name = name.toLowerCase().trim();

    // Verificar si el nombre es una cadena vacía y devolver un arreglo vacío
    if (name.length === 0) return [];

    // Filtrar el array de héroes y devolver aquellos cuyo nombre incluye el nombre proporcionado
    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes(name)
    );
};
