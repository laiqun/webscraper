var webpack = require("webpack"),
    path = require("path"),
    fileSystem = require("fs"),
    env = require("./utils/env"),
    CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin,
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    WriteFilePlugin = require("write-file-webpack-plugin");

// load the secrets
var alias = {};

var secretsPath = path.join(__dirname, ("secrets." + env.NODE_ENV + ".js"));

var fileExtensions = ["jpg", "jpeg", "png", "gif", "eot", "otf", "svg", "ttf", "woff", "woff2"];

if (fileSystem.existsSync(secretsPath)) {
  alias["secrets"] = secretsPath;
}

var options = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    popup: path.join(__dirname, "src", "js", "popup.js"),
    options: path.join(__dirname, "src", "js", "options.js"),
    background: path.join(__dirname, "src", "js", "background.js"),
	content_script:path.join(__dirname, "src", "js", "content_script.js"),
	frame:path.join(__dirname, "src", "js", "frame.js"),
	devtools_init:path.join(__dirname, "src", "js", "devtools_init.js"),
	devtools_panel:path.join(__dirname, "src", "js","devtools", "devtools_panel.js"),	
  },
  chromeExtensionBoilerplate: {
    notHotReload: ["content_script"]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
	  //{
		//  test:/\.js$/,
		 // loader:['babel-loader'],
		  //include:path.join(__dirname,'src'),
		  //exclude:/node_modules/
	  //},
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        exclude: /node_modules/
      },
      {
        test: new RegExp('.(' + fileExtensions.join('|') + ')$'),
        loader: "file-loader?name=[name].[ext]",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: alias
  },
  plugins: [
    // clean the build folder
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    // expose and write the allowed env vars on the compiled bundle
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new CopyWebpackPlugin([{
      from: "src/manifest.json",
      transform: function (content, path) {
        // generates the manifest file using the package.json informations
        return Buffer.from(JSON.stringify({
          description: process.env.npm_package_description,
          version: process.env.npm_package_version,
          ...JSON.parse(content.toString())
        }))
      }
    }]),
    new CopyWebpackPlugin([{
      from: "src/_locales",
	  to:path.join(__dirname,"build","_locales")
      }
    ]),	
    new CopyWebpackPlugin([{
      from: "src/img",
	  to:path.join(__dirname,"build","img")
      }
    ]),		
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "popup.html"),
      filename: "popup.html",
      chunks: ["popup"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "options.html"),
      filename: "options.html",
      chunks: ["options"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "background.html"),
      filename: "background.html",
      chunks: ["background"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "frame.html"),
      filename: "frame.html",
      chunks: ["frame"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "devtools_init_page.html"),
      filename: "devtools_init_page.html",
      chunks: ["devtools_init"]
    }),	
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "devtools_web_crawler_panel.html"),
      filename: "devtools_web_crawler_panel.html",
      chunks: ["devtools_panel"]
    }),	
    new WriteFilePlugin()
  ]
};

if (env.NODE_ENV === "development") {
  options.devtool = "cheap-module-eval-source-map";
}

module.exports = options;
