const autoprefixer = require("autoprefixer");

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.module.rules.push({
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            modules: true
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            plugins: [
              autoprefixer,
            ],
          },
        },
        {
          loader: "sass-loader",
          options: { sourceMap: true },
        },
      ],
    },);
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
