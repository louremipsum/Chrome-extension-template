const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    background: path.resolve(__dirname, "..", "src", "background.ts"),
    "scripts/content": path.resolve(
      __dirname,
      "..",
      "src",
      "scripts",
      "content.ts"
    ),
    "popup/popup": path.resolve(__dirname, "..", "src", "popup", "popup.ts"),
    /* If you want to add a new page in your extension, you can add Typescript file of that page like this */
    // "popup/<ts file of new page>": path.resolve(__dirname, "..", "src", "popup", "<ts file of new page>.ts"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public/manifest.json"),
          to: path.resolve(__dirname, "../dist/manifest.json"),
        },
        {
          from: path.resolve(__dirname, "../src/popup/popup.html"),
          to: path.resolve(__dirname, "../dist/popup/popup.html"),
        },
        {
          from: path.resolve(__dirname, "../src/popup/popup.css"),
          to: path.resolve(__dirname, "../dist/popup/styles/popup.css"),
        },
        /* If you want to add a new page in your extension, you can add HTML/CSS file of that page like this */
        // {
        //   from: path.resolve(__dirname, "../src/popup/<ts file of new page>.html"),
        //   to: path.resolve(__dirname, "../dist/popup/<ts file of new page>.html"),
        // },
        // {
        //   from: path.resolve(__dirname, "../src/popup/<ts file of new page>.css"),
        //   to: path.resolve(__dirname, "../dist/popup/styles/<ts file of new page>.css"),
        // },
        {
          from: path.resolve(__dirname, "../public"),
          to: path.resolve(__dirname, "../dist/images"),
          filter: (resourcePath) => {
            return resourcePath.match(/\.(png|jpe?g|gif|svg)$/i);
          },
        },
      ],
    }),
  ],
};
