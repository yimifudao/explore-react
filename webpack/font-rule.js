
const rules = [
  {
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      minetype: 'application/font-woff',
    },
  },
  {
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      minetype: 'application/font-woff',
    },
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      minetype: 'application/octet-stream',
    },
  },
  { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      minetype: 'application/vnd.ms-fontobject',
    },
  }
]
module.exports = rules;