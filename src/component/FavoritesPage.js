import React from 'react';
import Favorites from './Favorites'; // Importez le composant Favorites
import { Link } from 'react-router-dom'; // Importez le composant Link

function FavoritesPage({ favorites, removeFavorite }) {
  return (
    <div className='bacgrounbody'>
      <header className='headmenue'>
        <div>
          <Link className='buttontext' to="/ajout/">Ajouter une recette</Link>
        </div>
        <Link className='buttontext' to="/favorites">Favoris</Link>
      </header>
      <div className="App">
        <h1>Liste de Favoris</h1>
        <Favorites favorites={favorites} removeFavorite={removeFavorite} />
      </div>
    </div>
  );
}

export default FavoritesPage;
