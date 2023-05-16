module.exports = {
  devServer: {
    port:8480,
    proxy: {
      "/api": {
        target: "http://localhost:8380/train/",
        changeOrigin: true,
        pathRewrite: {
          "/api": ''
        }
      }
    }
  }
}
