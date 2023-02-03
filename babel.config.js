module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: [
          {'@constants': './src/constants'},
          {'@assets': './src/assets'},
          {'@components': './src/components'},
          {'@navigation': './src/navigation'},
          {'@screens': './src/screens'},
        ],
      },
    ],
  ],
};
