import { useQuery } from 'react-query';
import { getPokemons } from '../services/services';
import { useEffect, useState } from 'react';


interface Data {
  results: {}
}

type FetchData = {
  isLoading: boolean,
  data: Array<Data>
}

export function usePokemonSearch() {
  const [fetch, setFetch] = useState<FetchData>({
    isLoading: false,
    data: []
  });
  const { isLoading, error, data } = useQuery('getPokemons', async () => {
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
