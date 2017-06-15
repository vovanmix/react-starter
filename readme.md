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
