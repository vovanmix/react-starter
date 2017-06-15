# Main
You need to have node >= 7 and yarn >= 0.23 installed globally in your system to work with this repo.
```
nvm install 7.9
brew install yarn --ignore-dependencies
```
## Development
### Frontend
#### Install new packages
Use only yarn. It helps avoid problems with different versions installed in different environments, is faster and has other benefits.
1. Go to the app directory `cd ./development/frontent`
2. Add a new package `yarn add pkg-name`
2. Add a dev package (needed only in dev - like for linting and testing; packages needed for build are not dev) `yarn add --dev pkg-name`
3. Remome package `yarn remove pkg-name`
4. Install locally packages that were added to package.json remotely `yarn install`

Yarn will create yarn.lock file that should be checked in git.
#### From root dir
1. Launch a dev server with watch for changes and hot reload. It will open the browser automatically.
```sh
yarn watch:frontend
```
2. Build front files to the `./development/frontend/dist` folder
```sh
yarn build:frontend
```
3. Run tests
```sh
yarn test:frontend
```
#### From ./development/frontend dir
1. Launch a dev server with watch for changes and hot reload. It will open the browser automatically.
```sh
yarn watch
```
2. Build front files to the `./development/frontend/dist` folder with production settings
```sh
yarn build
```
3. Run tests
```sh
yarn test
```

## Images
option to copy all images to dist:
```require.context('../images', true, /^.*/);```
but basically we need to do it like this:
```import logoImage from '../../../images/logo.png';```
## Swagger client generation
### Setup
You need to have swagger-codegen installed.
```sh
brew install swagger-codegen
```
Don't forget to install Java 7 or 8. You probably have 1.6. Export JAVA_HOME in order to use the supported Java version:
```sh
export JAVA_HOME=`/usr/libexec/java_home -v 1.8`
export PATH=${JAVA_HOME}/bin:$PATH
```
### Generation
```sh
swagger-codegen generate -i ./swagger.yaml -l javascript -o ./development/frontend/src/js/client --additional-properties usePromises=true
```
The generated code should be checked in to git as a regular code. But it should never be changed manually.
```js
var devClient = new ApiClient();
devClient.basePath = 'http://localhost:8080';
var devPetApi = new PetApi(devClient);
```
