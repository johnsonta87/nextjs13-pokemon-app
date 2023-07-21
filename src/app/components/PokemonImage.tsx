import * as React from 'react';
import Image from 'next/image';
import { usePokemon } from '../hooks/usePokemon';

interface IAppProps {
  name: string,
  url: string
}

export function PokemonImage ({ name = "", url = "" }: IAppProps) {
  const { data: pokemon, isLoading } = usePokemon(url) || {};
  const { sprites } = pokemon;

  if (isLoading) <p>Loading ...</p>

  if(!sprites) {
    return;
  }

  return (
    <Image
      src={sprites.front_default}
      width={150}
      height={150}
      alt={name}
    />
  );
}
