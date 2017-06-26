import { ApiClient, DefaultApi } from '../client/src/index';

export default function ApiService() {
  const dev = process.env.NODE_ENV !== 'production';
  const base = dev ? 'http://localhost:8000' : '';

  const devClient = new ApiClient();
  devClient.basePath = `${base}/api`;

  return new DefaultApi(devClient);
}
