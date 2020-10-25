import axios from 'axios';
import methods from '../Utils/Api';
import { _BaseUrl } from './Routes';
import { client as authClient } from './Authority';

const client = axios.create({
  baseURL: _BaseUrl,
});

export default methods(client, authClient);

export * from './Routes';
export * from './Models';
