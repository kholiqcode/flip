module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: [
          {'@constants': './src/constants'},
          {'@assets': './src/assets'},
          {'@store': './src/store'},
          {'@services': './src/services'},
          {'@components': './src/components'},
          {'@navigation': './src/navigation'},
          {'@screens': './src/screens'},
        ],
      },
    ],
  ],
};
