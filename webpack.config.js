const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const toml = require("toml")
const yaml = require("yamljs")
const json5 = require("json5")

module.exports = {
	mode: "development",
	
	entry: "./src/index.js",
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},

	optimization: {
		runtimeChunk: 'single',
	},
	plugins: [new HtmlWebpackPlugin({
		title: "To-Do List!"
	})],

	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, "src"),
				use:["style-loader", "css-loader", "postcss-loader"]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource"
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.toml$/i,
				type: 'json',
				parser: {
				  parse: toml.parse,
				},
			},
			{
				test: /\.yaml$/i,
				type: 'json',
				parser: {
				  parse: yaml.parse,
				},
			},
			{
				test: /\.json5$/i,
				type: 'json',
				parser: {
				  parse: json5.parse,
				},
			},
		],
	}
}