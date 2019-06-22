
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // mode:'development',
    mode:'production',
    entry: {
        index: './lib/index.tsx'
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.jsx']
    },
    output:{
        path:path.resolve(__dirname,'dist/lib'),
        library:'FUI',
        libraryTarget:'umd'
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ],
    // 外部的库
    externals:{
        // 四个格式是分别对应js历史上各种不同的打包工具的
        react:{
            commonjs:'react',
            commonjs2:'react',
            amd:'react',
            root:'React'
        },
        'react-dom':{
            commonjs:'react-dom',
            commonjs2:'react-dom',
            amd:'react-dom',
            root:'ReactDom'
        }
    }
}