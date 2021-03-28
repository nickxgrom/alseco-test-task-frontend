const webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    VueLoaderPlugin = require('vue-loader/lib/plugin-webpack4')

module.exports = {
    mode: "development",
    entry: ['./src/index.js', 'webpack-hot-middleware/client'],
    output: {
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.template.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}