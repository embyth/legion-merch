import path from 'path';

const __dirname = path.resolve();

export default {
  mode: `development`,
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  devServer: {
    contentBase: `public`,
    open: true,
    hot: true,
    historyApiFallback: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`,
      },
      {
        test: /\.svg$/,
        use: [`@svgr/webpack`],
      },
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `.jsx`]
  },
  devtool: `source-map`,
};
