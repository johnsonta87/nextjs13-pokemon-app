import * as React from 'react';
import { usePokemon } from '../hooks/usePokemon';

export interface IPokemonDetailsProps {
  id: number
}

interface PokemonDetails {
  type: string
}

export function PokemonDetails({ id = 0 }: IPokemonDetailsProps) {
  const { data: pokemon } = usePokemon(id) || {};
  const {
    id: pokemonId,
    types,
    weight,
    abilities
  } = pokemon;


  const pokemonTypes = types.map((type, index) => {
    const { name } = type.type;
    return (
      <span key={index} className="capitalize">{name}</span>
    )
  });
  const pokemonAbilities = abilities.map((ability, index) => {
    const { name } = ability.ability;
    return (
      <span key={index} className="capitalize">{name}</span>
    )
  })

  return (
    <div>
      <p>ID: {pokemonId}</p>
      {types.length > 0 && <p>
        Types: {pokemonTypes}
      </p>}
      {weight > 0 && <p>Weight: {`${weight} kg`}</p>}
      <p>Abilities: {pokemonAbilities}</p>
    </div>
  );
}
