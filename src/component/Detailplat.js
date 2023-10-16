import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Detailplat() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => {
        setData(response.data.meals);
        setLoading(false);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite : ', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="App">
      {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        <body>
          <Link className='buttontext' to="/">Retour</Link>
          {data.map((meal, index) => (
            <div className='detail' key={index}>
              <h2>Recette : {meal.strMeal}</h2>
              <div className="RecetteDescription">
                <img className='imgdetail' src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strInstructions}</p>
              </div>
            </div>
          ))}
        </body>
      )}
    </div>
  );
}

export default Detailplat;
