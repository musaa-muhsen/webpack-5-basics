const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const target = process.env.NODE_ENV === "production" ? "browserlist" : "web";
//console.log('yolo', target)

module.exports = {
    //mode: 'development',
    //devtool: false,
    //target: target,
    entry: {
      main: "./src/index.js",
      vendor: "./src/vendor.js"
    },
    /*
    output: {
        filename: "main.[contenthash].js",
        // tell it where to spit this code out 
        // what is path.resolve? what this is going to do is resolve an absolute path to this code directory   
        path: path.resolve(__dirname, "dist")
        // $ means it has to end with .css for example \. we have to escaple it with back slash as well 
    },
    */
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          { 
            test: /\.html$/,
            use: "html-loader"
           },
           {
            test: /\.(ico|gif|png|jpg|jpeg|svg)$/,
            type: 'asset/resource'
          }
           /*
           {
            test:/\.(svg|png|jpg|gif)$/,
            use: {
              loader: 'url-loader'
            },
          }
          */
           /*
           {
            test:/\.(svg|png|jpg|gif)$/,
            use: {
                loader: "file-loader",
                options: {
                         name: "[name].[hash].[ext]",
                         //root: path.resolve(__dirname, 'imgs')
                         //the name is going to be [webpack].[8338653].svg
                         // test for svg, jpg etc if matching then the loader is triggered it copies it over into a new folder called imgs in our dist 
                         //publicPath: 'imgs',
                         outputPath: "imgs"
                         //esModule: false
                         
                         }
                 } 

             }*/
             
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/template.html'
          // its going to use this template.html take this code put into a new file is calling index.html and it's going to make sure to include our script tag at the bottom using the correct name depending which bundle we just built 
      })
        // new webpack.DefinePlugin({
        //   'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        // }),
      ],
    optimization: {
      splitChunks: {
          cacheGroups: {
              node_vendor: {
                test: /[\\/]node_modules[\\/]/,
                chunks: 'all',
                priority: 1,
                name: "all"
          }
      }
  }
}
      
      // optimization: {
      //   splitChunks: {
      //     chunks: 'all',
      //     name: false
      //   }
      // }


    
};


