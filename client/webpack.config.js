import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
const __dirname = path.resolve();

export default {
    mode: 'development',
    entry: ["@babel/polyfill",'./src/app/index.jsx'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/app/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true
    },
    module: {
        
        // rules: [
        //     {
        //         test: /\.js|js$/,
        //         exclude: /node_modules/,
        //         use: {
        //             loader: 'babel-loader',
        //             options: {
        //                 presets: ['@babel/preset-env'],
        //             }
        //         }
        //     }
        // ],
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                use: [
                  // Creates `style` nodes from JS strings
                  "file-loader"
                ]
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"]
                  }
                }
            }
        ]
    },
    resolve: {
        extensions: ["*", '.js', '.jsx']
    }
}