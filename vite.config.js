const glob = require('glob');
const path = require('path');

const input = {};

const inputFiles = glob.sync('_site/**/*.html');

for (file of inputFiles) {
  const key = path.dirname(file)
    .replace(/^.*?_site\//, '')
    .replace(/\//g, '-');
  input[key] = file;
}
 
module.exports = {
  root: '_root',
  build: {
    rollupOptions: {
      input,
      output: {
          dir: 'dist/'
      }
    }
  }
};