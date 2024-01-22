import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { HeroCard } from '../components';

export const SearchPage = () => {
  // Hook de navegación y ubicación
  const navigate = useNavigate();
  const location = useLocation();

  // Obtener el valor del parámetro de consulta 'q' de la URL
  const { q } = queryString.parse(location.search);

  // Custom Hook para gestionar el formulario
  const { searchText, onInputChange } = useForm({
    searchText: '',
  });

  // Manejar la búsqueda al enviar el formulario
  const onSearchSubmit = (event) => {
    event.preventDefault();
    
    // Verificar que la longitud del texto sea mayor a 1
    if (searchText.trim().length <= 1) {
      return;
    }

    // Navegar a la misma página con el nuevo parámetro de consulta
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            {/* Input para el texto de búsqueda */}
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            {/* Botón para realizar la búsqueda */}
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* Mensajes de resultados */}
          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">No hero with <b>{q}</b></div>

          {/* Componente de tarjeta de héroe (actualmente comentado) */}
          {/* <HeroCard {...HeroCard}/> */}
        </div>
      </div>
    </>
  );
};
