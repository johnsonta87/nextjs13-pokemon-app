import { useQuery } from "react-query";
import { getAbility } from "../services/services";
import { useEffect, useState } from "react";

type FetchData = {
  isLoading: boolean,
  data: {
    id: number,
    name: string
  }
}

export function useAbilities(url = "") {
  const [fetch, setFetch] = useState<FetchData>({
    isLoading: false,
    data: {
      id: 1,
      name: ""
    }
  });
  const { isLoading, data } = useQuery(['getAbility', url], async () => {
    const res = await getAbility(url);

    return res?.data;
  });

  useEffect(() => {
    if (data) {
      setFetch({ isLoading, data })
    }
  }, [isLoading, data]);

  return data;
}
