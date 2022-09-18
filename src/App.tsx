import React from "react";
import { PokemonCard } from "./components";
import { PokemonTypesEnum } from './types';

const gengar = {
  id: 94,
  name: 'gengar',
  types: [PokemonTypesEnum.ghost, PokemonTypesEnum.poison],
  sprites: [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png',
  ],
};

const App = () => {
  return (
    <div>
      <div>Hello PokeFederations (ui-components)</div>
      <PokemonCard 
        pokemon={gengar} 
        onNameClick={(id) => console.log({ id })}
        onTypeClick={(type) => console.log({ type })} 
      />
    </div>
  );
};

export default App;
