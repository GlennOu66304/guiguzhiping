// create-react-app配置ant-design-mobile按需导入
// version 2 https://antd-mobile-v2.surge.sh/docs/react/use-with-create-react-app
// 1/14/2022 10:47:11 https://mobile.ant.design/guide/import-on-demand
// 2018-12-27 https://blog.csdn.net/hahahhahahahha123456/article/details/85281039?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-2-85281039-blog-108477739.pc_relevant_vip_default&spm=1001.2101.3001.4242.2&utm_relevant_index=5
// 2020-09-08 21:31:09 https://blog.csdn.net/qq_41519363/article/details/108477739
// 2021-03-08 https://blog.51cto.com/u_15103035/2651293

const { override, fixBabelImports, addLessLoader } = require("customize-cra");
// react-ant design mobile - webpack 自定义主题
// https://blog.csdn.net/duanran0/article/details/105654701
// 使用ant design mobile的定制主题时的配置
// https://blog.csdn.net/m0_46360310/article/details/113244165
// 关于antd-mobile自定义主题 2019-12-06
// https://www.jianshu.com/p/7097348cd900
const theme = require("./antd-theme.json");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme,
  })
);
