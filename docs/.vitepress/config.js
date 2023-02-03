/*
 * @Author: lileichao
 * @Date: 2023-02-03 14:34:02
 * @LastEditors: lileichao
 * @LastEditTime: 2023-02-03 14:35:41
 * @Description: file content
 * @Copyright: 深圳妙创医学有限公司2021
 */
const {
  getTsSidebar,
  getAboutSidebar,
  getBrowserSidebar,
  getReactSidebar,
  getGulpSidebar,
  getSourceCodeSidebar,
} = require("./sidebar");
module.exports = {
  title: "测不准的博客",
  description: "学习记录，欢迎指正",
  base: "/await-blog/dist/",
  // head: [
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: '/img', // 图片放在 public 文件夹下
  //     }
  //   ]
  // ],
  themeConfig: {
    repo: "soloporridge/soloporridge.github.io/tree/master",
    // 头部导航
    nav: [
      { text: "首页", link: "/" },
      { text: "关于", link: "/about/blog", activeMatch: "^/about/" },
      {
        text: "前端技术",
        items: [
          { text: "TS", link: "/ts/basics", activeMatch: "^/ts/" },
          { text: "React", link: "/react/ts", activeMatch: "^/react/" },
          { text: "Gulp", link: "/gulp/index", activeMatch: "^/gulp/" },
        ],
      },
      {
        text: "前端相关",
        items: [
          { text: "浏览器", link: "/browser/index", activeMatch: "^/browser/" },
          {
            text: "源码阅读",
            link: "/source-code/index",
            activeMatch: "^/source-code/",
          },
          {
            text: "面试题",
            link: "/source-code/index",
            activeMatch: "^/source-code/",
          },
        ],
      },
    ],
    // 侧边导航
    sidebar: {
      "/ts/": getTsSidebar(),
      "/react": getReactSidebar(),
      "/gulp": getGulpSidebar(),

      "/about": getAboutSidebar(),

      "/browser": getBrowserSidebar(),
      "/source-code": getSourceCodeSidebar(),
    },
    // sidebar: [
    //   {text: '我的', link: '/mine/'},
    // ]
  },
  markdown: {
    config: (md) => {
      const { langList, demoBlockPlugin } = require("../../demoblock"); //require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        lang: langList,
      });
    },
  },
};
