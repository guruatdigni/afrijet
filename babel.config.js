module.exports = {
  "presets": ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  "plugins": [
    [
      "babel-plugin-inline-import",
      {
        "extensions": [".svg"]
      },
    ],
    "react-native-reanimated/plugin",
  ]
};
