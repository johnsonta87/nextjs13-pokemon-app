"use client"

import { Suspense, useEffect, useState } from "react"
import { Loading } from "./components/Loading"
import { usePokemonSearch } from "./hooks/usePokemonSearch";
import { PokemonImage } from "./components/PokemonImage";
import { PokemonDetails } from "./components/PokemonDetails";

interface PokemonData {
  name: string;
  url: string;
}

export default function Main() {
  const [ pokemon, setPokemon ] = useState(1);
  const [buttonValue, setButtonValue ] = useState(pokemon);
  const { data: pokemonList } = usePokemonSearch();
  const pokemonOption: PokemonData[] = pokemonList;
  const isDefault = pokemon === 1;
  const isLast = pokemon === 151;

  useEffect(() => {
    setPokemon(buttonValue)
  }, [buttonValue])

  const handlePokemonSelect = (name: number) => {
    setPokemon(name);
    setButtonValue(name);
  }

  const Dropdown = () => {
    return (
      <select
        className="p-2 rounded w-full mb-4"
        onChange={(e) => handlePokemonSelect(parseInt(e.target.value))}>
        {pokemonOption.map((pokemon, index) => {
          return <option key={index} value={index + 1} selected={buttonValue === index + 1}>{pokemon.name.toUpperCase()}</option>;
        })}
      </select>
    )
  }

  return (
    <main>
      <div className="flex align-baseline flex-col md:flex-row gap-4 justify-between p-4 md:p-24 md:w-3/5 mx-auto">
        <div className="w-full md:w-1/2">
          <Suspense fallback={<Loading />}>
            {Dropdown()}
            <PokemonImage id={pokemon} />

          <div className="flex justify-between gap-4 w-full my-4">
            <button
              className={`rounded-md p-4 w-full bg-sky-500 text-white ${isDefault ? 'disabled:opacity-75' : null}`}
              disabled={isDefault}
              onClick={() => {
                setPokemon(buttonValue);
                setButtonValue(buttonValue => --buttonValue)
              }}
              >
                Previous
            </button>
            <button
              className={`rounded-md p-4 w-full bg-sky-500 text-white ${isLast ? 'disabled:opacity-75' : null}`}
              disabled={isLast}
              onClick={() => {
                setPokemon(buttonValue);
                setButtonValue(buttonValue => ++buttonValue)
              }}
              >
                Next
              </button>
            </div>
          </Suspense>
        </div>
        <div className="w-full md:w-1/2 bg-white p-4 rounded border-2">
          <PokemonDetails id={pokemon} />
        </div>
      </div>
    </main>
  )
}
