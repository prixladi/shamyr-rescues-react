import axios from 'axios';
import { _BaseUrl } from './Routes';

export default axios.create({
    baseURL: _BaseUrl
});

export * from './Routes';
export * from './Models'