import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api, { _Places, PlacePreviewModel, PlacesModel } from '../Api';

const limit = 10;

const usePlaces = (prefetch: boolean): [PlacePreviewModel[], boolean, () => Promise<void>] => {
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [places, setPlaces] = useState([] as PlacePreviewModel[]);
  const history = useHistory();

  const fetchNext = useCallback(async () => {
    try {
      const response = await api.get<PlacesModel>(_Places, { params: { offset, limit }, history, expectedStatus: [200] });
      if (!response) return;

      const allPlaces = places.concat(response.data.places);
      setPlaces(allPlaces);
      setHasMore(places.length < response.data.count);
      setOffset(offset + limit);
    } catch (err) {
      console.log(err);
    }
  }, [offset, places, history]);

  useEffect(() => {
    if (prefetch && places.length === 0 && hasMore) fetchNext();
  }, [prefetch, places, hasMore, fetchNext]);

  return [places, hasMore, fetchNext];
};

export default usePlaces;
