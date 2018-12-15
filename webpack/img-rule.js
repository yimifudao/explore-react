
const rules = [
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      minetype: 'image/svg+xml',
    }
  },
  {
    test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
    loader: 'url-loader',
    options: {
      limit: 10000,
    }
  }
]
module.exports = rules;