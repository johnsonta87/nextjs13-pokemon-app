import { useQuery } from 'react-query';
import { getPokemon } from '../services/services';
import { useEffect, useState } from 'react';

type FetchData = {
  isLoading: boolean,
  data: object
}

export function usePokemon(url = "") {
  const [fetch, setFetch] = useState<FetchData>({
    isLoading: false,
    data: {}
  });
  const { isLoading, data } = useQuery(['getPokemon', url], async () => {
    const res = await getPokemon(url);

    return res?.data;
  });

  useEffect(() => {
    if (data) {
      setFetch({ isLoading, data })
    }
  }, [isLoading, data]);

  return fetch;
}
