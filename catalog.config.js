module.exports = {
  webpack: (catalogWebpackConfig, {paths, dev, framework}) => {
    console.log(catalogWebpackConfig)
    if (!dev)
      catalogWebpackConfig.plugins.splice(0, 1)
    return catalogWebpackConfig
  }
}