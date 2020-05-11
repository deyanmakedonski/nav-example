module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.ios.js',
          '.android.js',
          '.ts',
          '.ios.ts',
          '.android.ts',
        ],
        alias: {
          app: './src/app/',
        },
      },
    ],
  ],
};
