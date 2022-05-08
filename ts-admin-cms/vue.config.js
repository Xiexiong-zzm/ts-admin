/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
module.exports = {
  //配置方式一：使用vue-cli内置提供的
  outputDir: "./build",
  //   配置方式二 和webpack属性完全一致，最后会进行合并
  //   configureWebpack: {
  //     resolve: {
  //       alias: {
  //         components: "@/components",
  //       },
  //     },
  //   },
  //   或者改写为一下形式
  //   configureWebpack: (config) => {
  //     config.resolve.alias = {
  //       "@": path.resolve(__dirname, "src"),
  //       components: "@/components",
  //     };
  //   },
  //   配置方式三：
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", "@/components");
  },
};
