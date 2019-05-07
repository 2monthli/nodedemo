const path = require('path')
var webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')


module.exports = {
    // 应用入口
	  entry: {
        
	    app: path.join(__dirname, './src/index.js') // index.js作为打包的入口
      },
      // 输出目录
	  output: {
        filename: 'build.js',
        // filename: '[name].[hash:8].js', //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
        path: path.join(__dirname, 'dist'), // 打包好之后的输出路径
      },
      module: {
          rules: [{
              test: /\.(js|jsx)$/,
              use: {
                loader: 'babel-loader',
                options: {
                    presets: ["env", "react"] //['@babel/preset-react']
                },
              },
              exclude: [
                path.join(__dirname, '../node_modules') // 由于node_modules都是编译过的文件，这里我们不让babel去处理其下面的js文件
              ]
          }]
      },
      plugins: [
        new HTMLPlugin({
            title: '这是个简单的demo？',
            filename: 'distTemp.html', //制定的文件，默认
            template: 'template.html' //制定html生成使用的模板文件 
        }) 
      ],
      devServer: {
          //inline: true, //实时刷新
          index: 'distTemp.html',
          port: 8000
      }
}