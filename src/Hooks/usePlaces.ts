import { useCallback, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import api, { _Places, PlacePreviewModel, PlacesModel } from '../Api';

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

const usePlaces = (prefetch: boolean): [PlacePreviewModel[], boolean, () => Promise<void>] => {
  const [state, dispatchPlaces] = useReducer(reducer, { places: [], hasMore: true });
  const history = useHistory();

  const fetchNext = useCallback(async () => {
    try {
      const response = await api.get<PlacesModel>(_Places, {
        params: { offset: state.places.length, limit },
        history,
        expectedStatus: [200],
      });

      if (response) {
        dispatchPlaces({ model: response.data });
      }
    } catch (err) {
      console.log(err);
    }
  }, [state, dispatchPlaces, history]);

  useEffect(() => {
    if (prefetch && state.places.length === 0 && state.hasMore) {
      fetchNext();
    }
  }, [prefetch, state, fetchNext]);

  return [state.places, state.hasMore, fetchNext];
};

export default usePlaces;
