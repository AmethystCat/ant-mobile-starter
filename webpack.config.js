var path = require('path'),
    webpack = require('webpack'),
    env = process.env.NODE_ENV;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(env);
console.log('==================================================华丽丽的分割线=============================================');

// 开发环境配置
// --------------------------------------------------------------------------------------------
var config_dev = {
	entry: {
		bundle: [
			'webpack/hot/dev-server',
			path.resolve(__dirname,'src/entry.js')
		],
		vendors: ['react', 'react-dom']
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname,'build'),
		publicPath: '/'
	},
	resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
		root: '/src',
		extensions: ['', '.web.js', '.js', 'jsx', '.json', '.less']
	},
	devtool: 'eval-source-map',
	module: {
		preLoaders: [
            {
                // eslint loader
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                include: [path.resolve(__dirname,'src')],
                exclude: [path.resolve(__dirname, 'node_modules')]
            }
        ],
		loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader?sourceMap', 'less-loader?sourceMap']
            },
            {
                test: /\.(jpg|jpeg|png|gif|)$/i,
                loaders: ['url-loader?limit=15000']
            }, 
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000'
            }
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js')
	],
	devServer: {
            hot: true,
            inline: true
            // proxy: {
            //   '/*': {
            //       target: 'http://www.homer.com/',
            //       secure: false
            //   }
            // }
        }
};

// 生产环境配置
// ---------------------------------------------------------------------------------------------------
var config_production = {
    entry: {
		bundle: [
			path.resolve(__dirname,'src/entry.js')
		],
		vendors: ['react', 'react-dom']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'build/js')
	},
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'less-loader'])
			},
			{
                test: /\.(jpg|jpeg|png|gif|)$/i,
                loaders: ['url-loader?limit=15000']
            },
            {
            	test: /\.(js|jsx)$/,
            	loader: 'babel-loader',
            	exclude: [path.resolve(__dirname, 'node_modules')]
            },
        	{
        		test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000'
        	}
        ]
    },
    devtool: 'cheap-module-source-map',
    plugins: [
		new ExtractTextPlugin('/build/css/style.css'),
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
	]
};

module.exports = (env === 'production') ? config_production : config_dev;
