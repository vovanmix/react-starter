# Main
You need to have node >= 7 and yarn >= 0.23 installed globally in your system to work with this repo.
```
nvm install 7.9
brew install yarn --ignore-dependencies
```
## Development
### Frontend
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
