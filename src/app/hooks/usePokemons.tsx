import { useQuery } from 'react-query';
import { getPokemons } from '../services/services';
import { useEffect, useState } from 'react';

type FetchData = {
  isLoading: boolean,
  data: object
}

export function usePokemons() {
  const [fetch, setFetch] = useState <FetchData>({
    isLoading: false,
    data: {
      results: []
    }
  });
  const { isLoading, data } = useQuery('getPokemons', async () => {
    const res = await getPokemons();

    return res?.data;
  });

  useEffect(() => {
    if (data) {
      setFetch({ isLoading, data })
    }
  }, [isLoading, data]);

  return fetch;
}
