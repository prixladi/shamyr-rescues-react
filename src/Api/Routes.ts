import { ApiConfig } from '../Configs';

const _BaseUrl = ApiConfig.url;
const _Places = 'places';
const _Place = (id: number) => `places/${id}`;

export { _BaseUrl, _Places, _Place };
