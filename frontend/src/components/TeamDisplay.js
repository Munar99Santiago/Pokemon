import React from 'react';

function TeamDisplay({ team, removeFromTeam }) {
  if (team.length === 0) {
    return null; // No mostrar nada si el equipo está vacío
  }
  
  // Capitalize first letter
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  return (
    <div className="team-container">
      <h3>Mi Equipo Pokémon</h3>
      <div className="team-pokemon">
        {team.map(pokemon => (
          <div key={pokemon.id} className="team-pokemon-item">
            <img src={pokemon.sprite_url} alt={pokemon.name} />
            <p>{capitalize(pokemon.name)}</p>
            <button onClick={() => removeFromTeam(pokemon.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamDisplay;