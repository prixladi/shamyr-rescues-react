import { ApiConfig } from '../Configs';

const _BaseUrl = ApiConfig.url;

const _Users = 'users';
const _Places = 'places';
const _Place = (id: number): string => `places/${id}`;

export { _Users, _BaseUrl, _Places, _Place };
