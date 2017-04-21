// 这是webpack-config
var path = require("path");
var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin");
var extracTtextWebpackPlugin = require("extract-text-webpack-plugin");//生成css文件
var nodeModulesPath = "/node_modules/";
var path = require("path");
var src = "./src";
var style = "./style";
module.exports = {
	entry: {
		index: "./src/index.js",
		// vendors:["react","react-dom","redux"]
	},
	output: {
		path: path.join(__dirname,"bulid"),
		filename: "js/[name].[hash].js",
	},
	resolve: {
		extensions: [".js",".css",".jsx",".scss"],
		modules: ["static","style","src","node_modules"],
		alias: {
			'react': nodeModulesPath + "react",
			'react-dom': nodeModulesPath + "react-dom",
			'redux': nodeModulesPath + "redux",
			'react-redux': nodeModulesPath + "react-redux",
			'react-router': nodeModulesPath + "react-router"
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/, 
				loader: "babel-loader",
				query: {presets: ['es2015']},
				include: src 
			},
	        {
	        	test: /\.css$/, 
	        	loader: "style-loader!css-loader",
	        	include: style
	        },
	        {
	        	test: /\.(jpg|png)$/, 
	        	loader: "url-loader?limit=8192"
	        },
	      	{
	      		test: /\.scss$/, 
	      		loader: "style-loader!css-loader!sass-loader",
	      		include: style
	      	}
		]
	},
	plugins: [//主要完成文件的操作
		new htmlWebpackPlugin({template: path.join(__dirname,"template/index.html")}),//根据模板文件生成html
		new extracTtextWebpackPlugin("/style/styles.[hash].css"),
		new webpack.optimize.CommonsChunkPlugin({name:'vendors', filename:'js/vendors.[hash].js'}),//根据入口处的第三方依赖文件生成vendor文件js
	]
	
}

// webpack使用总结：
// 1.webpack主要配置项包括：entry output resolve plugins module.
// 2.entry:这是对入口文件的配置可以配置多个入口文件，可以在这里将第三方的库文件打包到一个文件里。
// 3.output:这是打包文件的出口文件地址
// 4.module:其中包括loaders用于sass、png|jpg、js|jsx、的加载。
// 5.resolve:包括后缀的省略extensions、快捷路径modulesDirectories、指定公共库的位置alias
// 6.plugins:htmlWebpackPlugin 创建html、webpack.optimize.CommonsChunkPlugin打包第三方库、以及引入css库