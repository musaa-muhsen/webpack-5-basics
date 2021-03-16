const path = require('path');
const common = require('./webpack.common');
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        })
        //new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
       // new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: [
          {
            test: /\.scss$/,

            use: [
            MiniCssExtractPlugin.loader, //3. Extract css into files 
            'css-loader', // 2. turns css into commonjs 
            'sass-loader' // 1. turns sass into css 
                 ],
          },
      ]
     },
    //  optimization: {
    //      minimizer: [
    //         new HtmlWebpackPlugin({
    //             template: './src/template.html',
    //             minify: {
    //                 collapseWhitespace: false,
    //                 removeComments: true,
    //             }
    //         })
    //      ]
      
    //  },
    //devtool: false,
    output: {
        //filename: "main.[contenthash].js",
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]'
    },

        // runtimeChunk: 'single',
        // splitChunks: {
        //   chunks: 'all',
        //   maxInitialRequests: Infinity,
        //   minSize: 0,
        //   cacheGroups: {
        //     vendor: {
        //       test: /[\\/]node_modules[\\/]/,
        //       name(module) {
        //         // get the name. E.g. node_modules/packageName/not/this/part.js
        //         // or node_modules/packageName
        //         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
    
        //         // npm package names are URL-safe, but some servers don't like @ symbols
        //         return `npm.${packageName.replace('@', '')}`;
        //       },
        //     },
        //   },
        // },

      
});


