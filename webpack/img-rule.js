
const rules = [
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
    options: {
      limit: 100,
      minetype: 'image/svg+xml',
    }
  },
  {
    test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
    loader: 'url-loader',
    options: {
      limit: 100,
    }
  }
]
module.exports = rules;