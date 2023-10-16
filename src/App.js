import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ListOfMeal from './component/listOfMeal';
import Detailplat from './component/Detailplat';
import Ajout from './component/Ajout';
import Login from './component/Login';
import PrivateRoute from './component/PrivateRoute';
import LoginPage from './component/LoginPage';
import { AuthProvider } from './component/AuthContext';
import FavoritesPage from './component/FavoritesPage'; // Importez le composant FavoritesPage

function App() {
  // Déclarez les variables favorites et removeFavorite ici
  const favorites = []; // Assurez-vous de passer les vraies données ici
  const removeFavorite = () => {}; // Assurez-vous de définir la vraie fonction ici

  return (
    <Router>
      <AuthProvider>
        <div>
          <Routes>
            <Route path="/" element={<ListOfMeal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ajout/" element={<Ajout />} />
            <Route path="/detailplat/:id" element={<Detailplat />} />
            <Route path="/loginpage/" element={<LoginPage />} />
            <Route
              path="/favorites"
              element={<FavoritesPage favorites={favorites} removeFavorite={removeFavorite} />}
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
