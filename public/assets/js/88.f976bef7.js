(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{477:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-中的-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中的-loader"}},[s._v("#")]),s._v(" webpack 中的 loader")]),s._v(" "),a("h2",{attrs:{id:"_1-loader-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-loader-概述"}},[s._v("#")]),s._v(" "),a("strong",[s._v("1. loader 概述")])]),s._v(" "),a("p",[s._v("在实际开发过程中，webpack 默认只能打包处理以 .js 后缀名结尾的模块。其他非 .js 后缀名结尾的模块，")]),s._v(" "),a("p",[s._v("webpack 默认处理不了，需要调用 loader 加载器才可以正常打包，否则会报错！")]),s._v(" "),a("p",[s._v("loader 加载器的作用：协助 webpack 打包处理特定的文件模块。比如：")]),s._v(" "),a("ul",[a("li",[s._v("css-loader 可以打包处理 .css 相关的文件")]),s._v(" "),a("li",[s._v("less-loader 可以打包处理 .less 相关的文件")]),s._v(" "),a("li",[s._v("babel-loader 可以打包处理 webpack 无法处理的高级 JS 语法")])]),s._v(" "),a("h2",{attrs:{id:"_2-loader-的调用过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-loader-的调用过程"}},[s._v("#")]),s._v(" "),a("strong",[s._v("2. loader 的调用过程")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/34351bd51cee48bda4c1c852c44bc03b.png",alt:"image-20220812141157599"}})]),s._v(" "),a("h2",{attrs:{id:"_3-打包处理-css-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-打包处理-css-文件"}},[s._v("#")]),s._v(" "),a("strong",[s._v("3. 打包处理 css 文件")])]),s._v(" "),a("p",[s._v("① 运行 npm i style-loader@2.0.0 css-loader@5.0.1 -D 命令，安装处理 css 文件的 loader")]),s._v(" "),a("p",[s._v("② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所有第三方文件模块的匹配规则")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件后缀名的匹配规则")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("其中，test 表示匹配的文件类型， use 表示对应要调用的 loader")]),s._v(" "),a("p",[s._v("注意：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("use 数组中指定的 loader 顺序是固定的")])]),s._v(" "),a("li",[a("p",[s._v("多个 loader 的调用顺序是：从后往前调用")])])]),s._v(" "),a("h2",{attrs:{id:"_4-打包处理-less-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-打包处理-less-文件"}},[s._v("#")]),s._v(" "),a("strong",[s._v("4. 打包处理 less 文件")])]),s._v(" "),a("p",[s._v("① 运行 npm i less-loader@7.1.0 less@3.12.2 -D 命令")]),s._v(" "),a("p",[s._v("② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件后缀名的匹配规则")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.less$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'less-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_5-打包处理样式表中与-url-路径相关的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-打包处理样式表中与-url-路径相关的文件"}},[s._v("#")]),s._v(" "),a("strong",[s._v("5. 打包处理样式表中与")]),s._v(" url 路径相关的文件")]),s._v(" "),a("p",[s._v("① 运行 npm i url-loader@4.1.1 file-loader@6.2.0 -D 命令")]),s._v(" "),a("p",[s._v("② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件后缀名的匹配规则")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.jpg|png|gif$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url-loader?limit = 22229'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("其中 ? 之后的是 loader 的参数项：")]),s._v(" "),a("ul",[a("li",[s._v("limit 用来指定图片的大小，单位是字节（byte）")]),s._v(" "),a("li",[s._v("只有 ≤ limit 大小的图片，才会被转为 base64 格式的图片")])]),s._v(" "),a("h3",{attrs:{id:"_5-1-loader-的另一种配置方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-loader-的另一种配置方式"}},[s._v("#")]),s._v(" "),a("strong",[s._v("5.1 loader 的另一种配置方式")])]),s._v(" "),a("p",[s._v("带参数项的 loader 还可以通过对象的方式进行配置：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件后缀名的匹配规则 ")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.jpg|png|gif$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 匹配图片文件")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             loader： "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过 loader 属性指定要调用的 loader")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过 options 属性指定参数项")]),s._v("\n             \t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22229")]),s._v("\n         \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"_6-打包处理-js-文件中的高级语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-打包处理-js-文件中的高级语法"}},[s._v("#")]),s._v(" 6. 打包处理 js 文件中的高级语法")]),s._v(" "),a("p",[s._v("webpack 只能打包处理一部分高级的 JavaScript 语法。对于那些 webpack 无法处理的高级 js 语法，需要借助于 babel-loader 进行打包处理。例如 webpack 无法处理下面的 JavaScript 代码：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过 static 关键字，为 Person 类定义了一个静态属性 info ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack 无法打包处理“静态属性”这个高级语法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" info "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'person info'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_6-1-安装-babel-loader-相关的包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-安装-babel-loader-相关的包"}},[s._v("#")]),s._v(" 6.1 安装 babel-loader 相关的包")]),s._v(" "),a("p",[s._v("运行如下的命令安装对应的依赖包：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npm i babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("loader@"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v(" @babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("core@"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.12")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),s._v(" @babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("proposal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("properties@"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.12")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("包的名称及版本号列表如下（前面是包的名称、@后面是包的版本号）：")]),s._v(" "),a("ul",[a("li",[s._v("babel-loader@8.2.1")]),s._v(" "),a("li",[s._v("@babel/core@7.12.3")]),s._v(" "),a("li",[s._v("@babel/plugin-proposal-class-properties@7.12.1")])]),s._v(" "),a("h3",{attrs:{id:"_6-2-配置-babel-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-配置-babel-loader"}},[s._v("#")]),s._v(" 6.2 配置 babel-loader")]),s._v(" "),a("p",[s._v("在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// exclude 为排除项，")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// babel-loader 只需处理开发者编写的 js 文件，不需要处理 node_modules 下的 js 文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("option")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 参数项")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 声明一个 babel 插件，此插件用来转化 class 中的高级语法")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/plugin-propossal-class-properties'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);