import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin';

const plugins = [
	new HtmlWebpackPlugin({
		template: 'src/index.html',
		filename: 'index.html',
	}),
	new HtmlWebpackPlugin({
		template: 'src/index.html',
		filename: '200.html',
	}),
];

if (process.env.NODE_ENV === 'production') {
	plugins.push(new webpack.EnvironmentPlugin([
		"NODE_ENV",
	]));
	plugins.push(new webpack.optimize.OccurenceOrderPlugin());
	plugins.push(new webpack.optimize.DedupePlugin());
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false,
			screw_ie8: true,
		}
	}));
} else {
	plugins.push(new webpack.NoErrorsPlugin());
	plugins.push(new webpack.HotModuleReplacementPlugin());
}

export default {
	entry: [
		path.join(__dirname, 'src', 'main.js'),
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]-[hash].js',
		publicPath: '/',
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
			{ test: /\.css$/, loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]___[local]___[hash:base64:7]', 'resolve-url'] },
			{ test: /\.scss$/, loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]___[local]___[hash:base64:7]', 'resolve-url', 'sass?sourceMap', 'postcss'] },
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
			{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
		],
	},
	plugins: plugins,
}
