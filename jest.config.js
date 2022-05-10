module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "babel-jest",
  },
};
