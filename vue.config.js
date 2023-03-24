const {
	defineConfig
} = require('@vue/cli-service')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = defineConfig({
	transpileDependencies: true,

	pluginOptions: {
		vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
	},

	configureWebpack: {
		plugins: [new MiniCssExtractPlugin()],
	},
	
	publicPath: process.env.NODE_ENV === 'production'
	    ? '/employees-list/'
	    : '/employees-list'

})
