module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: './src/components',
          screens: './src/screens',
          reducers: './src/redux/reducers',
          actions: './src/redux/actions',
        },
      },
    ],
    ['module:react-native-dotenv'],
  ],
};
