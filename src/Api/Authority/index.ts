import axios from 'axios';
import { _BaseUrl } from './Routes';
import methods from '../../Utils/Api';

const client = axios.create({
  baseURL: _BaseUrl,
});

export default methods(client, client);
export { client };

export * from './Routes';
