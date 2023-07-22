import { useQuery } from 'react-query';
import { getPokemon } from '../services/services';
import { useEffect, useState } from 'react';



interface PokemonType {
  name?: string,
  url?: string
}
interface TypesType {
  slot: number,
  type: PokemonType
}

interface AbilityType {
  name: string,
  url: string
}

interface AbilitiesType {
  is_hidden: boolean,
  slot: number,
  ability: AbilityType
}

type FetchData = {
  isLoading: boolean,
  data: {
    id: number,
    name: string,
    weight: number,
    sprites: {
      front_default: string
    },
    types: Array<TypesType>,
    abilities: Array<AbilitiesType>
  }
}

export function usePokemon(id = 0) {
  const [fetch, setFetch] = useState<FetchData>({
    isLoading: false,
    data: {
      id: 1,
      name: "",
      weight: 0,
      sprites: {
        front_default: ""
      },
      types: Array(),
      abilities: Array()
    }
  });

  const { isLoading, data } = useQuery(['getPokemon', id], async () => {
    const res = await getPokemon(id);

    return res?.data;
  });

  useEffect(() => {
    if (data) {
      setFetch({ isLoading, data })
    }
  }, [isLoading, data]);

  return fetch;
}
