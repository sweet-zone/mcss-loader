# mcss-loader
mcss loader for webpack

## Installation

`npm install mcss-loader --save-dev`

## Usage

### webpack config

``` javascript
module.exports = {
  module: {
    loaders: [
      {
        test: /\.mcss$/,
        loader: "style!css!mcss"
      }
    ]
  }
};
```

Then you only need to write: `require("./logic.mcss")`
