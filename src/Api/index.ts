import axios from 'axios';
import methods from '../Utils/Api';
import { _BaseUrl } from './Routes';

const client = axios.create({
  baseURL: _BaseUrl,
});

export default methods(client);

export * from './Routes';
export * from './Models';
