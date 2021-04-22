const path = require('path');

export default {
  env: {
    development: {
      extraBabelPlugins: ["dva-hmr"]
    }
  },
  "outputPath": path.resolve(__dirname, 'docs'),
};
