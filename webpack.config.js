const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports  = {
  
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
   
  },
  
 
  resolve:{
    extensions: ['.js', '.json', '.jsx'],
    
  
  
    

  },
  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
    proxy: {
      '/stubs/api': {
          target: 'http://localhost:3000'
          },
      }
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", 
                  { loader: "css-loader", 
                  options: {
                    modules: {
                      localIdentName: "[path][name]__[local]--[hash:base64:5]",
                      localIdentContext: path.resolve(__dirname, "src"),
                   
                      exportLocalsConvention: "camelCase",
                     
                                                    },
                                                },
                                              },
                
                                            ]
                    
                                          }, 



                    {
                      test: /\.jsx$/,
                      exclude: /node_modules/,
                      use: {
                        loader: 'babel-loader',
                        options: {
                          presets: [
                            
                            '@babel/preset-env',
                            '@babel/preset-react'
                          ]
                                 }    
                    
                            },
                          },
                          {
                            test: /\.(png|svg|jpe?g|gif)$/i,
                            use: [
                              {
                                loader: 'file-loader',
                              },
                            ],
                          },
                          {
                            test: /\.csv$/,
                            loader: 'csv-loader',
                            options: {
                              dynamicTyping: true,
                              header: true,
                              skipEmptyLines: true
                                    }
                                  },
                                  {
                                    test: /\.txt$/i,
                                    use: 'raw-loader',
                                  },                 
                       
                
                
                
                
                
                
                 
    ],
  },
  plugins:  [new HtmlWebpackPlugin(
    {
      template: './public/index.html',
    }
  ),
  ],
  mode: 'development',
};
