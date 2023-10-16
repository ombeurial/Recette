import React from 'react';

function Favorites({ favorites, removeFavorite }) {
  return (
    <div>
      <h1>Recettes favorites</h1>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            {favorite.name}
            <button onClick={() => removeFavorite(favorite.id)}>Retirer des favoris</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;