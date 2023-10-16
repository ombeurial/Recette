const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const axios = require('axios');
const app = express();
const PORT = 3000; // Port du serveur

app.use(cors());
app.use(bodyParser.json());

const secretKey = 'votre_clé_secrète';

// Middleware pour vérifier le token JWT sur les routes protégées
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Utilisez bcrypt pour hacher le mot de passe et le stocker
const hashedPassword = bcrypt.hashSync('Salut15', 10);

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Simulez la vérification des identifiants de l'utilisateur
  if (email === 'PA@gmail.com' && bcrypt.compareSync(password, hashedPassword)) {
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Identifiant ou mot de passe incorrect' });
  }
});

app.get('/api/protected-data', authenticateToken, (req, res) => {
  // Route protégée, ne peut être atteinte que si l'utilisateur est authentifié
  res.json({ message: 'Données protégées accessibles' });
});

app.listen(PORT, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${PORT}`);
});
