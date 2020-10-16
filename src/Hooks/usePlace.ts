import { useCallback, useEffect, useState } from 'react';
import api, { _Places, PlaceDetailModel } from '../Api';

const usePlace = (id: number): PlaceDetailModel | null => {
  const [place, setPlace] = useState(null as PlaceDetailModel | null);

  const fetch = useCallback(async () => {
    try {
      const response = await api.get(`${_Places}/${id}`);
      setPlace(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
     fetch();
  }, [fetch]);

  return place;
};

export default usePlace;
