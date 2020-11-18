import { AuthApiConfig } from './Configs';
import createManager from './Authority';
import createClient from './Api';

const authorityManager = createManager(AuthApiConfig);
const apiClient = createClient(authorityManager);

export { authorityManager, apiClient };
