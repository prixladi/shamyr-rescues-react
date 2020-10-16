import { useCallback, useEffect, useState } from 'react';
import api, { _Places, PlacePreviewModel, PlacesModel } from '../Api';

const limit = 10;

const usePlaces = (prefetch: boolean): [PlacePreviewModel[], boolean, () => Promise<void>] => {
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [places, setPlaces] = useState([] as PlacePreviewModel[]);

  const fetchNext = useCallback(async () => {
    try {
      const response = await api.get(_Places, { params: { offset, limit } });
      const model: PlacesModel = response.data;
      const allPlaces = places.concat(model.places);

      setPlaces(allPlaces);
      setHasMore(places.length < model.count);
      setOffset(offset + limit);
    } catch (err) {
      console.log(err);
    }
  }, [offset, places]);

  useEffect(() => {
    if (prefetch && places.length === 0 && hasMore) fetchNext();
  }, [prefetch, places, hasMore, fetchNext]);

  return [places, hasMore, fetchNext];
};

export default usePlaces;
