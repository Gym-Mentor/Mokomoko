const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth",
    createProxyMiddleware({
      target: "http://i5d104.p.ssafy.io:8080/",
      changeOrigin: true,
    })
  );
};
