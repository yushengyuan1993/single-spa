const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa');

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    // The name of the organization this application is written for
    orgName: 'mmc-site',
    // The name of the current project. This usually matches the git repo's name
    projectName: 'store',
    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv
    webpackConfigEnv,
  })
  return webpackMerge.merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      port: 9001
    }
  })
}