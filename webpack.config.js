/* Makes it easier to run webpack, no longer need to give all prameters on the CLI

Now, running webpack in CLI will run build with all configuration settings we want (described in this file)

Configuration file in webpack is basically a commonJS module
*/

/* The path module is a built in module inside of node which helps when figuring out paths
*/
var path = require('path')

module.exports = {
/* path.resolve sets a relative route directory for the entry key, so now webpack will look for the entry files inside the src directory
*/
  context: path.resolve('src'),

/* Entry point, name of the top file(s) we want to include in our build

For something that isn't going to be 'required/imported' in but still neds to be included in the bundle, we can add it as another entry point
*/
  entry: ['./index.jsx'],
/* Output file, webpack will bundle all necesary files into the output file (bundle is just a typical name)
*/
  output: {
/* We weant to give our output file a path, so the path.resolve command (below) tells webpack to put the output file (bundle.js) into the build directory inside the src sub-directory
*/
    path: path.resolve('build/src/'),
/* publicPath key tells webpack where the output file (bundle.js) will be served up from on the webserver

We set publicPath to the directory where output file will be on the webserver - which should match the setting we put into the index.html file where we told it to look for the output file (bundle.js)

This setting applies to the webpack-dev-server, so that it knows that the contents of build/src are actully going to be requested from public/assets/src so that when the request comes in it will look for the file in build/src directory
*/
    publicPath: '/public/assets/src/',
    filename: 'bundle.js'
  },

/* tells web-server where it should look to find index.html when someone requests the index.html file from the root

we give it the name of the directory to use as its base dirctory

So any requests from the root will come out of the public directory
*/
  devServer: {
    contentBase: 'public',
/* setting inline true will enable hot-loading */
    inline: true
  },

  eslint: {
    configFile: './.eslintrc'
  },

/* Watchmode (set to true) will allow webpack to watch for changes and imediately re-run the build and re crete the output file
*/
  watch: true,
/* Inline flag 'removes status bar at the top' ?removes i-framed mode?
*/
  inline: true,

/* Module section addsnew modules
*/
  module: {
/* Loaders are how webpack 'learns new tricks' e.g. linting, other compilers etc.

A loader is just a file that exports a function. The compiler calls this function and passes the result of the previous loader or the resource file into it.
*/

/* preLoaders are run first and are generally used for processes like linting
*/
    preLoaders: [
      {
/* Regular expression which tests what file types should be run through this loader
*/
        test: [/\.js$/, /\.jsx$/],
/* Exclude key wxcludes certain types of files/ folders
*/
        exclude: /node_modules/,
/* The loader we will be using
*/
        loader: 'eslint-loader'
      }
    ],
/* loaders run after preLoaders and before postLoaders
*/
    loaders: [
        {
          test: [/\.js$/, /\.jsx$/],
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test:[/\.scss$/],
          exclude: /node_modules/,
          loaders: ['style', 'css', 'sass']
        }
    ]
  },
/* The resolve section allows us to specify what kind of file types we can process without specifically providing a filetype extension i.e. all .js files will be process without the need to add the .js extension

Using resolve overrides the default so you must include the default filetypes along with any other new ones you want to process automatically
*/
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}
