import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Ajout() {
  const [formData, setFormData] = useState({ name: '', recette: '',visuel: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enregistrement des données dans le Local Storage
    localStorage.setItem('userData', JSON.stringify(formData));

    // Effacer le formulaire
    setFormData({  name: '', recette: '',visuel: ''});
  };

  return (
    <body >
    <div>
      <h2>Formulaire d'enregistrement</h2>
      <form onSubmit={handleSubmit}>
        <label>
            <a>Nom du plat</a>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required/>
          </label>
        <br />
        <label>
            <a>Recette</a>
            <input type="text" name="recette" value={formData.recette} onChange={handleInputChange} required/>
          </label>
          <label>
            <a>Lien de l'image</a>
            <input type="text" name="visuel" value={formData.visuel} onChange={handleInputChange} required/>
          </label>
        <br />
        <button type="submit">Ajouter la recette</button>
        <br/>
        <Link className='buttontext' to="/">Retour</Link>
      </form>
    </div>
    </body>
  );
}

export default Ajout;