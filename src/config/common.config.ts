import { registerAs } from '@nestjs/config';

export const COMMON_CONFIG = 'common-config';

export default registerAs(COMMON_CONFIG, () => ({
  node_env: process.env.NODE_ENV,
  api_port: parseInt(process.env.API_PORT, 10) || 3000,
  api_key: process.env.API_KEY,
  extension_api_key: process.env.EXTENSION_API_KEY,
  elastic_index: process.env.ELASTIC_INDEX,
}));
