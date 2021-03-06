const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist'),
};

module.exports = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'app.js',
  },
};
