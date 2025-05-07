import React, { useState } from 'react';

function PokemonSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!searchTerm.trim()) {
      return;
    }
    
    // Convert to lowercase for consistency
    onSearch(searchTerm.toLowerCase().trim());
  };
  
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search-input-group">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ingresa ID o nombre del Pokémon"
            className="search-input"
          />
          <button type="submit" className="search-button">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PokemonSearch;