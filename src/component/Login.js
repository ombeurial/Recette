import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      if (response.data.token) {
        // Stockez le token dans le stockage local pour authentifier l'utilisateur
        localStorage.setItem('token', response.data.token);
        // Redirigez l'utilisateur vers la page d'accueil ou une autre page privée
        navigate('/'); // Remplacez '/' par la page souhaitée
      } else {
        setError('Identifiant ou mot de passe incorrect');
      }
    } catch (error) {
      setError('Une erreur s\'est produite lors de la connexion.');
      console.error('Erreur de connexion :', error);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Se connecter</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
