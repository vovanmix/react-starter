const path = require('path');
const express = require('express');
const swagger = require('swagger-express-middleware');

const Middleware = swagger.Middleware;
const MemoryDataStore = swagger.MemoryDataStore;
const Resource = swagger.Resource;

const app = express();
const middleware = new Middleware(app);

middleware.init(path.join(__dirname, '../../swagger.yml'), () => {
  const myDB = new MemoryDataStore();
  myDB.save(
    new Resource('/api/pets/1', {
      id: 1,
      name: 'Lassie',
      tag: 'brown'
    })
  );

  app.use(
    middleware.CORS(),
    middleware.metadata(),
    middleware.parseRequest(),
    middleware.validateRequest(),
    middleware.mock(myDB)
  );

  app.listen(8080, () => {
    console.log('The mock server is now running at http://localhost:8080');
  });
});
