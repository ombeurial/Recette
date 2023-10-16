import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Favorites from './Favorites'; // Importez le composant Favorites

function ListOfMeal() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => {
        setData(response.data.meals);
        setLoading(false);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite : ', error);
        setLoading(false);
      });
  }, []);

  const handleAddToFavorites = (mealId) => {
    // Implémentez la logique pour ajouter la recette aux favoris ici
    // Par exemple, ajoutez la recette à la liste des favoris.
    const mealToAdd = data.find(meal => meal.idMeal === mealId);
    if (mealToAdd) {
      setFavorites([...favorites, mealToAdd]);
    }
  };

  const handleLogout = () => {
    logout(); // Appel de la fonction de déconnexion du contexte
  };

  return (
    <div className='bacgrounbody'>
      <header className='headmenue'>
        <div>
          <Link className='buttontext' to="/ajout/">Ajouter une recette</Link>
        </div>
        {isAuthenticated ? (
          <div>
            <Link className='buttontext' to="/favorites/">Favoris</Link>
            <button className='buttontext' onClick={handleLogout}>Déconnexion</button>
          </div>
        ) : (
          <div>
            <Link className='buttontext' to="/loginpage/">Connexion</Link>
          </div>
        )}
      </header>
      <div className="App">
        <h1>Liste des plats</h1>
        {loading ? (
          <p>Chargement en cours...</p>
        ) : (
          <div className="Aligne">
            {data.map((meal, index) => (
              <div key={index} className="recette">
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <div className='buttonlink'>
                  <Link className='buttontext' to={`/detailplat/${meal.idMeal}`}>Voir plus</Link>
                  <button className='buttontext' onClick={() => handleAddToFavorites(meal.idMeal)}>Favori</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListOfMeal;
