import { ApiClient, DefaultApi } from '../client/src/index';
// client will be generated with Swagger

export default function ApiService() {
  const dev = process.env.NODE_ENV !== 'production';
  let base = '';
  if (dev) {
    base = process.env.BACKEND_HOST
      ? process.env.BACKEND_HOST
      : 'http://localhost:8080';
  }

  const devClient = new ApiClient();
  devClient.basePath = `${base}/api`;

  return new DefaultApi(devClient);
}
