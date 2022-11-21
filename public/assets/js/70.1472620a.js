(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{460:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vite-的基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vite-的基本使用"}},[s._v("#")]),s._v(" vite 的基本使用")]),s._v(" "),t("h2",{attrs:{id:"_1-创建-vite-的项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建-vite-的项目"}},[s._v("#")]),s._v(" 1. 创建 vite 的项目")]),s._v(" "),t("p",[s._v("按照顺序执行如下的命令，即可基于 vite 创建 vue 3.x 的工程化项目：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm init vite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app 项目名称\n\ncd 项目名称\nnpm install\nnpm run dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_2-梳理项目的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-梳理项目的结构"}},[s._v("#")]),s._v(" 2. 梳理项目的结构")]),s._v(" "),t("p",[s._v("使用 vite 创建的项目结构如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/8665fbc65f004971b180666c5767d855.png",alt:"image-20220815131203181"}})]),s._v(" "),t("p",[s._v("其中：")]),s._v(" "),t("ul",[t("li",[s._v("node_modules 目录用来存放第三方依赖包")]),s._v(" "),t("li",[s._v("public 是公共的静态资源目录")]),s._v(" "),t("li",[s._v("src 是项目的源代码目录（程序员写的所有代码都要放在此目录下）")]),s._v(" "),t("li",[s._v(".gitignore 是 Git 的忽略文件")]),s._v(" "),t("li",[s._v("index.html 是 SPA 单页面应用程序中唯一的 HTML 页面")]),s._v(" "),t("li",[s._v("package.json 是项目的包管理配置文件")])]),s._v(" "),t("h2",{attrs:{id:"_2-梳理项目的结构-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-梳理项目的结构-2"}},[s._v("#")]),s._v(" 2. 梳理项目的结构")]),s._v(" "),t("p",[s._v("在 src 这个项目源代码目录之下，包含了如下的文件和文件夹：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/af6e5d92e8b24d84a9148ff90d29499c.png",alt:"image-20220815131246070"}})]),s._v(" "),t("p",[s._v("其中：")]),s._v(" "),t("ul",[t("li",[s._v("assets 目录用来存放项目中所有的静态资源文件（css、fonts等）")]),s._v(" "),t("li",[s._v("components 目录用来存放项目中所有的自定义组件")]),s._v(" "),t("li",[s._v("App.vue 是项目的根组件")]),s._v(" "),t("li",[s._v("index.css 是项目的全局样式表文件")]),s._v(" "),t("li",[s._v("main.js 是整个项目的打包入口文件")])]),s._v(" "),t("h2",{attrs:{id:"_3-vite-项目的运行流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-vite-项目的运行流程"}},[s._v("#")]),s._v(" 3. vite 项目的运行流程")]),s._v(" "),t("p",[s._v("在工程化的项目中，vue 要做的事情很单纯：通过 main.js 把 App.vue 渲染到 index.html 的指定区域中。")]),s._v(" "),t("p",[s._v("其中：")]),s._v(" "),t("p",[s._v("① App.vue 用来编写待渲染的模板结构")]),s._v(" "),t("p",[s._v("② index.html 中需要预留一个 el 区域")]),s._v(" "),t("p",[s._v("③ main.js 把 App.vue 渲染到了 index.html 所预留的区域中")]),s._v(" "),t("h3",{attrs:{id:"_3-1-在-app-vue-中编写模板结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-在-app-vue-中编写模板结构"}},[s._v("#")]),s._v(" "),t("strong",[s._v("3.1 在 App.vue 中编写模板结构")])]),s._v(" "),t("p",[s._v("清空 App.vue 的默认内容，并书写如下的模板结构：")]),s._v(" "),t("div",{staticClass:"language-vue line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("这是 App 根组件"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_3-2-在-index-html-中预留-el-区域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-在-index-html-中预留-el-区域"}},[s._v("#")]),s._v(" "),t("strong",[s._v("3.2 在 index.html 中预留 el 区域")])]),s._v(" "),t("p",[s._v("打开 index.html 页面，确认预留了 el 区域：")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("body")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("/src/main.js"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}}),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_3-3-在-main-js-中进行渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-在-main-js-中进行渲染"}},[s._v("#")]),s._v(" "),t("strong",[s._v("3.3 在 main.js 中进行渲染")])]),s._v(" "),t("p",[s._v("按照 vue 3.x 的标准用法，把 App.vue 中的模板内容渲染到 index.html 页面的 el 区域中：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 按需导入 createApp 函数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" createApp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 导入待渲染的 App.vue 组件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" App "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./components/App.vue'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 导入需要被全局注册的组件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Swiper "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./components/01.globalReg/Swiper.vue'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./components/01.globalReg/Test.vue'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3. 调用 createApp 函数，创建 SPA 应用的实例")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createApp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 调用 app.component() 方法全局注册组件")]),s._v("\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Swiper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Swiper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4. 调用 mount() 把 App 组件的模板结构，渲染到指定的 el 区域中")]),s._v("\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);