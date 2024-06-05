const testFiles = require.context("./test", false, /\.test\.js$/);

console.log(testFiles);
