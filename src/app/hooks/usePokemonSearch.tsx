import { useQuery } from 'react-query';
import { getPokemons } from '../services/services';
import { useEffect, useState } from 'react';


type FetchData = {
  isLoading: boolean,
  data: []
}

export function usePokemonSearch() {
  const [fetch, setFetch] = useState<FetchData>({
    isLoading: false,
    data: []
  });
  const { isLoading, data } = useQuery('getPokemons', async () => {
    const res = await getPokemons(151);

    return res?.data.results;
  });

  useEffect(() => {
    if (data) {
      setFetch({ isLoading, data: data })
    }
  }, [isLoading, data]);

  return fetch;
}
