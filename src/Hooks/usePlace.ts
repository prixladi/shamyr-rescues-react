import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api, { _Place, PlaceDetailModel } from '../Api';

const usePlace = (id: number): PlaceDetailModel | null => {
  const [place, setPlace] = useState(null as PlaceDetailModel | null);
  const history = useHistory();

  const fetch = useCallback(async () => {
    try {
      const response = await api.get<PlaceDetailModel>(_Place(id), { history, expectedStatus: [200] });
      if (response) setPlace(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [id, history]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return place;
};

export default usePlace;
