module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: [
          {'@components': './src/components'},
          {'@navigation': './src/navigation'},
          {'@screens': './src/screens'},
        ],
      },
    ],
  ],
};
