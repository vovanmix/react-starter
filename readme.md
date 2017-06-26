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
1. Go to the app directory `cd ./development/frontend`
2. Add a new package: `yarn add pkg-name`
3. Add a dev package (needed only in dev - like for linting and testing; packages needed for build are not dev): `yarn add --dev pkg-name`
4. Remove package: `yarn remove pkg-name`
5. Install locally packages that were added to package.json remotely: `yarn install`. You can also run this command from the root directory of the project.

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
Use images like this:
```js
import logoImage from '../../../images/logo.png';
```
There is an option to copy all images to `dist` with this webpack config:
```js
require.context('../images', true, /^.*/);
```

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
yarn generate-client
```
or form the root of the project:
```sh
yarn generate-client:frontend
```
The generated code should be checked in to git as a regular code. But it should never be changed manually.
