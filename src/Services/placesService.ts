import { History } from 'history';
import { CreatePlaceModel, PlaceDetailModel, PlacesModel, UpdatePlaceModel, _Place, _Places } from '../Api';
import { apiClient } from '../clients';

type Query = {
  offset: number;
  limit: number;
  userId?: string;
};

const getByQuery = async (query: Query, history: History): Promise<PlacesModel | null> => {
  const response = await apiClient.get<PlacesModel>(_Places, {
    params: query,
    history,
    expectedStatus: [200],
  });

  return response?.data ?? null;
};

const getById = async (id: number, history: History): Promise<PlaceDetailModel | null> => {
  const response = await apiClient.get<PlaceDetailModel>(_Place(id), { history, expectedStatus: [200] });
  return response?.data ?? null;
};

const create = async (model: CreatePlaceModel, history: History): Promise<string | null> => {
  const response = await apiClient.post<void>(_Places, model, { history, expectedStatus: [201], shouldAuth: true });
  return response?.headers['location'];
};

const update = async (id: number, model: UpdatePlaceModel, history: History): Promise<boolean> => {
  const response = await apiClient.put<void>(_Place(id), model, { history, expectedStatus: [200, 204], shouldAuth: true });
  return response !== null;
};

export { getById, getByQuery, create, update };
