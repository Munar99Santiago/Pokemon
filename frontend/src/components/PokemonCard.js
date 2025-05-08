import React from 'react';

function PokemonCard({ pokemon, addToTeam }) {
  // Get color based on Pokemon type
  const getTypeColor = (type) => {
    const colors = {
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
    };
    
    return colors[type] || '#777777';
  };
  
  // Capitalize first letter
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  return (
    <div className="pokemon-card">
      <div className="pokemon-header">
        <h2>{capitalize(pokemon.name)} #{pokemon.id}</h2>
      </div>
      
      <div className="pokemon-image">
        <img 
          src={pokemon.sprite_url} 
          alt={pokemon.name} 
          className="pokemon-sprite"
        />
      </div>
      
      <div className="pokemon-details">
        <div className="pokemon-types">
          <h3>Tipos:</h3>
          <div className="type-badges">
            {pokemon.types.map((type, index) => (
              <span 
                key={index} 
                className="type-badge"
                style={{ backgroundColor: getTypeColor(type) }}
              >
                {capitalize(type)}
              </span>
            ))}
          </div>
        </div>
        
        <div className="pokemon-abilities">
          <h3>Habilidades:</h3>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{capitalize(ability.replace('-', ' '))}</li>
            ))}
          </ul>
        </div>
        
        <div className="pokemon-actions">
          <button 
            className="add-to-team-button" 
            onClick={() => addToTeam(pokemon)}
          >
            Agregar a mi equipo
          </button>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;