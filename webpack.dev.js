const path = require('path');
const common = require('./webpack.common');
const {merge} = require("webpack-merge");
const webpack = require("webpack");

// don't need this anymore -> const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ASSET_PATH = process.env.ASSET_PATH || '/';
//console.log(ASSET_PATH);
// merge everything in common with everything 
module.exports = merge(common, {
    target: 'web',
    mode: 'development',
    //devtool: false,
    // entry: {
    //   main: "./src/index.js",
    //   vendor: "./src/vendor.js"
    // },

    output: {
        //filename: "main.js",
        path: path.resolve(__dirname, "dist"),  
        //publicPath: ASSET_PATH,
        filename: '[name].dev.bundle.js',
        // tell it where to spit this code out 
        // what is path.resolve? what this is going to do is resolve an absolute path to this code directory   
        
        //publicPath: '/'
        // $ means it has to end with .css for example \. we have to escaple it with back slash as well 
    },
    module: {
      rules: [
          {
            test: /\.scss$/,

            use: [
            'style-loader', //3. Inject styles into dom 
            'css-loader', // 2. turns css into commonjs 
            'sass-loader' // 1. turns sass into css 
                 ],
          },
      ]

      },
    devServer: {
    // historyApiFallback: true,
      // contentBase: ['./src/template.html'],
      // publicPath: './src',
       open: true,
      //compress: true,
      //hot: true,
      port: 8080,
      //inline: true,
      // writeToDisk:true,
     },
   plugins: [
      //Only update what has changed on hot reload
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.DefinePlugin({
      //   'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
      // }),
    ],
    /*,
    module: {
        rules: [
          {
            test: /\.scss$/,

            use: [
            'style-loader', //3. Inject styles into dom 
            'css-loader', // 2. turns css into commonjs 
            'sass-loader' // 1. turns sass into css 
                 ],

          },
        ],
      }*/
      /*,
      plugins: [new HtmlWebpackPlugin({
          template: './src/template.html'
          // its going to use this template.html take this code put into a new file is calling index.html and it's going to make sure to include our script tag at the bottom using the correct name depending which bundle we just built 
      })]
      */

    
});


