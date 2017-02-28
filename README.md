# mcss-loader
mcss loader for webpack

## Installation

```bash
npm install mcss-loader --save-dev
```

## Usage

### webpack config

```js
module.exports = {
    module: {
        loaders: [{
            test: /\.mcss$/,
            loader: 'style-loader!css-loader!mcss-loader'
        }]
    }
};
```

if you use vue-loader: 

```js
module.exports = {
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    vue: {
        loaders: {
            mcss: 'vue-style-loader!css-loader!mcss-loader'
        }
    }
};
```

*Note: if you are using webpack2, please see [http://vue-loader.vuejs.org/en/configurations/advanced.html](http://vue-loader.vuejs.org/en/configurations/advanced.html)* 

More demos in [demo](https://github.com/zjzhome/mcss-loader/tree/master/demo)







