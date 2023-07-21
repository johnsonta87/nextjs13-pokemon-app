import * as React from "react";
import { usePokemons } from "../hooks/usePokemons";
import { PokemonImage } from "./PokemonImage";

export type IAppProps = {};

export function Pokemons(props: IAppProps) {
  const { data: pokemonList, isLoading } = usePokemons() || {};
  const list = pokemonList && pokemonList?.results?.map(({ name = "", url = "" }, index = null) => {
    return (
      <li key={index} className="flex flex-col justify-center text-center border-4 rounded p-4">
        <PokemonImage name={name} url={url} />
        <span className="font-bold">{name}</span>
      </li>
    )
  })

  if (isLoading) <p>Loading ...</p>

  return <ul className="grid gap-4 lg:gap-12 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 grid-rows-3">
    {list}
  </ul>;
}
