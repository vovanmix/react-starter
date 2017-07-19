# Main
You need to have node >= 7 and yarn >= 0.23 installed globally in your system to work with this repo.
```
nvm install 7.9
brew install yarn --ignore-dependencies
```
## Development
### Frontend
#### Install new packages
Use only yarn. It helps avoid problems with different versions installed in different environments: it makes sure that on each of the developers computers and on CI all the packages have the same versions. Also it is faster and has other benefits.
1. Go to the app directory `cd ./frontend`
2. Add a new package: `yarn add pkg-name`
3. Add a dev package (these are the packages that are needed only in dev and should not be installed when building the production app - like libraries for linting, mocking and testing; packages needed for build are not dev): `yarn add --dev pkg-name`
4. Remove package: `yarn remove pkg-name`
5. Install locally packages that were added to package.json remotely: `yarn install`. You can also run this command from the root directory of the project.

Yarn will create yarn.lock file that should be checked in git.
#### Commands from root dir
1. Launch a dev server with watch for changes and hot reload. It will open the browser automatically.
```sh
yarn watch:frontend
```
2. Build front files to the `./frontend/dist` folder
```sh
yarn build:frontend
```
3. Run tests
```sh
yarn test:frontend
```
#### Commands from ./frontend dir
1. Launch a dev server with watch for changes and hot reload. It will be available
at `http://localhost:3001`
```sh
yarn watch
```
2. Build front files to the `./frontend/dist` folder with production settings
```sh
yarn build
```
3. Run tests
```sh
yarn test
```

#### Bootstrap and font awesome
Bootstrap and Font Awesome are already installed and included in the main less file.
Icon fonts for Font Awesome are configured to be inserted into css files in base64 encoded form to save time on loading multiple files and make them available right away.

#### HTML template
file `index.ejs` contains html that will be used for the index page for local dev. All the JS and CSS
files are included there.

##### Include keys and predefined variables in the html code
Instead of creating a `<script>` tag and defining variables there, it's preferable to
define meta tags, put values there, and then access this values in the code.

For the local dev, this values can be set through webpack.

in Webpack:
```js
new HtmlWebpackPlugin({
  alwaysWriteToDisk: true,
  inject: false,
  template: 'index.ejs',
  stripeKey: 'some-value' //this is the value
}),
```

in index.ejs:
```html
<meta name="stripe-key" content="<%= htmlWebpackPlugin.options.stripeKey %>" />
```

anywhere in the React app (preferable in bootstrap.jsx):
```js
this.stripeKey = document.head.querySelector('meta[name=stripe-key]').content;
```

Any keys that are secret should not be included in git. Instead they should be
set as environment variables.One of the ways of doing it:

in Webpack:
```js
new HtmlWebpackPlugin({
  alwaysWriteToDisk: true,
  inject: false,
  template: 'index.ejs',
  stripeKey: process.env.STRIPE_PUBLIC_KEY
}),
```

when running the script:
```sh
STRIPE_PUBLIC_KEY=sdfdsfds yarn watch
```

#### Initialization
App initializes with `bootstrap.jsx` being mounted. A good place to put initialization
code and initial API calls to it's `constructor` and `componentDidMount` methods.

#### Preloading
There is a separate code entry point called `head.js` and `head.less`. This code will
be executed before react and all the libraries has been loaded. It's a good place
to put a custom pre-loading script in vanilla js if necessary. If not needed, the
references to these files can be removed from the html.

#### Builds
When building for production, files will be minified and will include unique hashes in their name. One hash per build. A manifest file will be created in `dist`, containing this hash.

#### Images
All images that were required in the js files using `import`, or referenced in css files, will be copied to `dist` by Webpack, preserving their names and directory structure.

Use images like this:
```js
import logoImage from '../../../images/logo.png';
```
There is an option to copy all images to `dist` with this webpack config:
```js
require.context('../images', true, /^.*/);
```

#### Swagger client generation
##### Setup
You need to have swagger-codegen installed.
```sh
brew install swagger-codegen
```
Don't forget to install Java 7 or 8. You probably have 1.6. Export JAVA_HOME in order to use the supported Java version:
```sh
export JAVA_HOME=`/usr/libexec/java_home -v 1.8`
export PATH=${JAVA_HOME}/bin:$PATH
```
##### Generation
```sh
yarn generate-client
```
or form the root of the project:
```sh
yarn generate-client:frontend
```
The generated code should be checked in to git as a regular code. But it should never be changed manually.
