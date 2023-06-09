
const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {
  // Your existing module.exports
  // productionBrowserSourceMaps: true,
  sentry: {
    // disableClientWebpackPlugin: true,
    // disableServerWebpackPlugin: true,
    widenClientFileUpload: true,
    hideSourceMaps:true,
  },


};
const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. 
  // release: "aldenRelease",
  // dist: "1",
  release: "aldenRelease",
  silent: false,
  ignore: [],
  configFile: "sentry.properties"
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};



module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions );

// module.exports = (moduleExports)