import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PlaceDetailModel } from '../Api';
import { placesService } from '../Services';

const usePlace = (id: number): PlaceDetailModel | null => {
  const [place, setPlace] = useState(null as PlaceDetailModel | null);
  const history = useHistory();

  const fetch = useCallback(async () => {
    const place = await placesService.getById(id, history);
    if (place) {
      setPlace(place);
    }
  }, [id, history]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return place;
};

export default usePlace;
