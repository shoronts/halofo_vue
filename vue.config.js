const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Holafo - Sell Your Xtra Half',
    shortName: 'Holafo - Sell Your Xtra Half',
    themeColor: '#fff',
    msTileColor: '#000'
  }
})
