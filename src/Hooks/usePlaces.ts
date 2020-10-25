import { useCallback, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { PlacePreviewModel, PlacesModel } from '../Api';
import { placesService } from '../Services';

const limit = 10;

type State = {
  places: PlacePreviewModel[];
  hasMore: boolean;
};

type Action = {
  model: PlacesModel;
};

const reducer = (state: State, action: Action): State => {
  const allPlaces = [...state.places, ...action.model.places];

  return {
    places: [...state.places, ...action.model.places],
    hasMore: allPlaces.length < action.model.count,
  };
};

const usePlaces = (prefetch: boolean, userId?: string): [PlacePreviewModel[], boolean, () => Promise<void>] => {
  const [state, dispatchPlaces] = useReducer(reducer, { places: [], hasMore: true });
  const history = useHistory();

  const fetchNext = useCallback(async () => {
    const places = await placesService.getByQuery({ offset: state.places.length, limit, userId }, history);
    if (places) {
      dispatchPlaces({ model: places });
    }
  }, [state, dispatchPlaces, history, userId]);

  useEffect(() => {
    if (prefetch && state.places.length === 0 && state.hasMore) {
      fetchNext();
    }
  }, [prefetch, state, fetchNext]);

  return [state.places, state.hasMore, fetchNext];
};

export default usePlaces;
