module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@domain":  "./src/domain",
          "@presentation": "./src/presentation",
          "@uiKit": "./src/libs/uiKit",
          "@data": "./src/data",
          "@navigation": "./src/presentation/navigation",
          "@screens": "./src/presentation/screens",
          "@components": "./src/presentation/components",
          "@assets": "./src/presentation/assets"
        }
      }
    ]
  ],
};
