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
    }),
    new Resource('/api/pets/2', {
      id: 2,
      name: 'Clifford',
      tag: 'red'
    }),
    new Resource('/api/pets/3', {
      id: 3,
      name: 'Garfield',
      tag: 'orange'
    }),
    new Resource('/api/pets/4', {
      id: 4,
      name: 'Snoopy',
      tag: 'black'
    }),
    new Resource('/api/pets/5', {
      id: 5,
      name: 'Hello Kitty',
      tag: 'white'
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
