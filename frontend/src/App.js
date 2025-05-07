import React, { useState, useEffect } from 'react';
import PokemonSearch from './components/PokemonSearch';
import PokemonCard from './components/PokemonCard';
import Pagination from './components/Pagination';
import './styles.css';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentId, setCurrentId] = useState(1);
  
  // Function to fetch Pokemon data from our WordPress API
  const fetchPokemon = async (idOrName) => {
    setLoading(true);
    setError(null);
    
    try {
      // Replace with your WordPress API URL
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000/wp-json/pokemon-api/v1';
      const response = await fetch(`${apiUrl}/pokemon/${idOrName}`);
      
      if (!response.ok) {
        throw new Error(`Pokemon not found (${response.status})`);
      }
      
      const data = await response.json();
      setPokemon(data);
      
      // Update current ID for pagination
      if (typeof idOrName === 'number' || !isNaN(parseInt(idOrName))) {
        setCurrentId(parseInt(idOrName));
      } else if (data.id) {
        setCurrentId(data.id);
      }
    } catch (err) {
      setError(err.message);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };
  
  // Fetch first Pokemon on initial load
  useEffect(() => {
    fetchPokemon(1);
  }, []);
  
  // Handle search submission
  const handleSearch = (idOrName) => {
    fetchPokemon(idOrName);
  };
  
  // Handle pagination
  const handlePrevious = () => {
    if (currentId > 1) {
      fetchPokemon(currentId - 1);
    }
  };
  
  const handleNext = () => {
    fetchPokemon(currentId + 1);
  };
  
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Pokémon Explorer</h1>
        <p>Busca tu Pokémon favorito por ID o nombre</p>
      </header>
      
      <main className="app-main">
        <PokemonSearch onSearch={handleSearch} />
        
        {loading && <div className="loading">Cargando...</div>}
        
        {error && <div className="error-message">{error}</div>}
        
        {pokemon && !loading && <PokemonCard pokemon={pokemon} />}
        
        <Pagination 
          onPrevious={handlePrevious} 
          onNext={handleNext} 
          currentId={currentId} 
          disablePrev={currentId <= 1}
        />
      </main>
      
      <footer className="app-footer">
        <p>Desarrollado con React & WordPress</p>
      </footer>
    </div>
  );
}

export default App;