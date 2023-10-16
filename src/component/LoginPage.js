import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Importez le contexte d'authentification

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { isAuthenticated, login } = useAuth(); // Utilisez le contexte d'authentification

  const handleLogin = () => {
    login(); // Appel de la fonction de connexion du contexte
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Vous êtes connecté en tant que {username}.</p>
          <Link to="/">Retour</Link>
        </div>
      ) : (
        <div>
          <h2>Page de Connexion</h2>
          <div>
            <label>Nom d'utilisateur:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Mot de passe:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Se Connecter</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
