const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // Additional resources to attach to application (additional features & functionality)
    // When creating the `dist` folder, also generate... 
    plugins: [
      // Webpack plugin that generates our html file and injects our bundles. 
      // ...`index.html`
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'J.A.T.E.'
      }),
     
      // Injects our custom service worker
      // `InjectManifest` is when we want the app to generate custom service worker file
      new InjectManifest({
        swSrc: './src-sw.js',
        // This is the file which will be generated into the dist folder, and can be called ANYTHING (ex. pikachu.js)
        swDest: 'src-sw.js',
      }),

      // Creates a manifest.json file.
      // `WebpackPwaManifest` allows us to specify all `manifest.json` file content 
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Text Editor',
        short_name: 'J.A.T.E',
        description: 'Allows you to code on the browser.',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: './',
        publicPath: './',
        // Placeholder logos on the left of an app
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    module: {
      // rules are what we want the files to be executed by
      rules: [
        {
          // All files using the `.css` sufix should...
          test: /\.css$/i,
          // ...be bundled together using 'style-loader' and 'css-loader' (npm packages that have been installed as devDependenci)
          use: ['style-loader', 'css-loader'],
        },
        {
          // All JS files...
          test: /\.m?js$/,
          // ...excluding `node_modules`...
          exclude: /node_modules/,
          // We use babel-loader in order to use ES6.
          // ...should run Babel based on the below plugins and configurations
          use: {
            // Babel, a transpiler, transforms and compiles JS ()
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
