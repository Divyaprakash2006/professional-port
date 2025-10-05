module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Override the devServer configuration to use setupMiddlewares
      if (webpackConfig.devServer) {
        webpackConfig.devServer.setupMiddlewares = (middlewares, devServer) => {
          // Any custom middlewares can be added here if needed
          return middlewares;
        };
        // Remove deprecated options if they exist
        delete webpackConfig.devServer.onAfterSetupMiddleware;
        delete webpackConfig.devServer.onBeforeSetupMiddleware;
      }
      return webpackConfig;
    },
  },
};
