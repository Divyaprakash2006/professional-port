module.exports = {
  devServer: (devServerConfig) => {
    // Remove deprecated middleware options
    delete devServerConfig.onAfterSetupMiddleware;
    delete devServerConfig.onBeforeSetupMiddleware;

    // Ensure setupMiddlewares is properly configured
    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      // Return middlewares as-is since we don't need custom middleware
      return middlewares;
    };

    return devServerConfig;
  },
};
