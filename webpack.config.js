// webpack.config.js
import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Necesitamos estas dos líneas para obtener __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development", // ⚡ Evita el warning
  entry: "./src/index.js", // ⚡ Asegúrate de que este archivo existe
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // ⚡ Output correcto
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // ⚡ Tu HTML de plantilla
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devtool: "eval-source-map", // Para debugging
  devServer: {
    watchFiles: ["./src/template.html"],
  },
};