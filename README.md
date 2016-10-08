# mcss-loader
mcss loader for webpack

## Installation

```bash
npm install mcss-loader --save-dev
````

## Usage

### webpack config
```javascript
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

Or add a config option via loader-query if necessary
```javascript
module.exports = {
  module: {
    loaders: [
      {
        test: /\.mcss$/,
        loader: "style!css!mcss?" + JSON.stringify({
                 format: 1,
                 pathes:[
                     './src/mcss'
                 ],
                 importCSS: false,
                 indent: '\t'
             })
      }
    ]
  }
};
```

Then you only need to write: `require("./logic.mcss")`
