# vue-project

> 1

## Build Setup

``` bash
# 安装依赖
cnpm i or yarn install

# 开发环境 run => localhost:8080
npm run dev

# 打包dist
npm run build

# build for production and view the bundle analyzer report
npm run build --report


## 开发目录结构

├─ src/: 开发目录；
│  ├─ api/: 封装aixos拦截器
│  ├─ assets/：静态资源存放目录；
│  ├─ components/：vue组件目录；
│  ├─ pages/：页面目录；
│  ├─ router/：路由目录；
│  ├─ service/：请求api目录；
│  ├─ store/：vuex目录；
│  ├─ utils/：公共方法以及全局垫片目录；
│  ├─ App.vue/：App.vue；
│  ├─ main.js/：入口文件；
├─ dist/：存放上线打包文件的目录；
├─ .babelrc：统一编码配置文件，`针对babel编译`；
├─ .gitignore：这是git忽略配置文件，`推送到git时忽略的文件配置列表`；
├─ package.json：开发运行依赖包配置文件；
├─ README.md：项目阅读说明文件；

```