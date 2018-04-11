var genEntry = require('mpvue-entry')
const path = require('path')

// hack mpvue-entry require.main.filename
require.main.filename = path.resolve(process.cwd(), 'src/main.js')
const entry = genEntry('./src/router/routes.js')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  webpack: {
    entry,
    // module: {
    //   rules: [
    //     {
    //       test: /\.(js|vue)$/,
    //       loader: require.resolve('eslint-loader'),
    //       enforce: 'pre',
    //       include: [resolve('src')],
    //       options: {
    //         formatter: require.resolve('eslint-friendly-formatter')
    //       }
    //     }
    //   ]
    // },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        flyio: 'flyio/dist/npm/wx',
        wx: resolve('src/utils/wx')
      },
      symlinks: true
    }
  }
}
