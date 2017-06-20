# mjModule
## 前端模块加载、按版本加载

### 简述
利用 localStorage 储存 js 模块，在页面每次加载时检测储存的 js 版本。<br>
若版本不一致，则想服务器（此处用 nodejs 实现）请求 js 模块。<br>
参数为 localStorage 的 js 模块版本号。<br>
服务器则返回已修改的 js 模块<br>

### 适用场景
* webapp for touch
* 支持 localStorage 的浏览器网页应用

### 2017.06.20 review
不实用，当时的想法是很好的。
缺一个版本控制的服务。
干巴爹
