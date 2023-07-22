import * as React from 'react';
import Image from 'next/image';
import { usePokemon } from '../hooks/usePokemon';

interface IAppProps {
  id: number
}

export function PokemonImage({ id }: IAppProps) {
  const { data: pokemon } = usePokemon(id) || {};
  const { sprites, name } = pokemon;

  if (!sprites.front_default) {
    return;
  }

  return (
    <div className="bg-white flex justify-center flex-col w-full items-center rounded border-4 p-4">
      <Image
        src={sprites.front_default}
        width={250}
        height={250}
        alt={`Pokemon`}
      />
      <h2 className="font-bold uppercase">{name}</h2>
    </div>
  );
}
