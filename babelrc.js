const DEV = process.env.NODE_ENV === 'development';

const hmr = DEV ? {
  "development": {
    "presets": ["react-hmre"],
    "plugins": [
      ["react-transform", {
        "transforms": [{
          "transform": "react-transform-hmr",
          "imports": ["react"],
          "locals": ["module"]
        }]
      }]
    ]
  }
} :
{};

module.exports = {
  "presets": [
      "es2015", "stage-1", "react"
  ],
  "env": hmr
};
