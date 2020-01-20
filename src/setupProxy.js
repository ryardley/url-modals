const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    proxy({
      target: "https://jobs.github.com",
      pathRewrite: {
        "^/api": "/positions.json"
      },
      changeOrigin: true,
      secure: true,
      logLevel: "debug"
    })
  );
};
