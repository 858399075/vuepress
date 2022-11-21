(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{481:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"webpack-的打包发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的打包发布"}},[s._v("#")]),s._v(" webpack 的打包发布")]),s._v(" "),t("h2",{attrs:{id:"_1-为什么要打包发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么要打包发布"}},[s._v("#")]),s._v(" "),t("strong",[s._v("1. 为什么要打包发布")])]),s._v(" "),t("p",[s._v("项目开发完成之后，使用 webpack 对项目进行打包发布的主要原因有以下两点：")]),s._v(" "),t("p",[s._v("① 开发环境下，打包生成的文件存放于内存中，无法获取到最终打包生成的文件")]),s._v(" "),t("p",[s._v("② 开发环境下，打包生成的文件不会进行代码压缩和性能优化")]),s._v(" "),t("p",[s._v("为了让项目能够在生产环境中高性能的运行，因此需要对项目进行打包发布。")]),s._v(" "),t("h2",{attrs:{id:"_2-配置-webpack-的打包发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-webpack-的打包发布"}},[s._v("#")]),s._v(" 2. 配置 webpack 的打包发布")]),s._v(" "),t("p",[s._v("在 package.json 文件的 scripts 节点下，新增 build 命令如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"dec"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack serve"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//开发环境中，运行 dev 命令")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack --mode production"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//项目发布时，运行 build 命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("--model 是一个参数项，用来指定 webpack 的运行模式。production 代表生产环境，会对打包生成的文件")]),s._v(" "),t("p",[s._v("进行代码压缩和性能优化。")]),s._v(" "),t("p",[t("strong",[s._v("注意：通过 --model 指定的参数项，会覆盖 webpack.config.js 中的 model 选项。")])]),s._v(" "),t("h2",{attrs:{id:"_3-把-javascript-文件统一生成到-js-目录中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-把-javascript-文件统一生成到-js-目录中"}},[s._v("#")]),s._v(" 3. 把 JavaScript 文件统一生成到 js 目录中")]),s._v(" "),t("p",[s._v("在 webpack.config.js 配置文件的 output 节点中，进行如下的配置：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("output")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 明确告诉 webpack 把生成的 bundle.js 文件存放到 dist 目录下的 js 子目录中")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("filename")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'js/bundle.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_4-把图片文件统一生成到-image-目录中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-把图片文件统一生成到-image-目录中"}},[s._v("#")]),s._v(" 4. 把图片文件统一生成到 image 目录中")]),s._v(" "),t("p",[s._v("修改 webpack.config.js 中的 url-loader 配置项，新增 outputPath 选项即可指定图片文件的输出路径：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.jpg|png|gif$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("options")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("limit")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22228")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 明确指定把打包生成的图片文件，存储到 dist 目录下的 image 文件夹中")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("outputPath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'image'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"_5-自动清理-dist-目录下的旧文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-自动清理-dist-目录下的旧文件"}},[s._v("#")]),s._v(" 5. 自动清理 dist 目录下的旧文件")]),s._v(" "),t("p",[s._v("为了在每次打包发布时自动清理掉 dist 目录中的旧文件，可以安装并配置 clean-webpack-plugin 插件：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.安装清理 dist 目录的 webpack 插件")]),s._v("\nnpm install clean"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webpack"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin@"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2.按需导入插件、得到插件的构造函数之后，创建插件的实例对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" CleanWebpackPlugin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'clean-webpack-plugin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" cleaPlugin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CleanWebpackPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3.把创建的 cleanPlugin 插件实例对象，挂载到 plugins 节点中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("thmlPlugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cleanPlugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//挂载插件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"_6-企业级项目的打包发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-企业级项目的打包发布"}},[s._v("#")]),s._v(" 6. 企业级项目的打包发布")]),s._v(" "),t("p",[s._v("企业级的项目在进行打包发布时，远比刚才的方式要复杂的多，主要的发布流程如下：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("生成打包报告，根据报告分析具体的优化方案")])]),s._v(" "),t("li",[t("p",[s._v("Tree-Shaking")])]),s._v(" "),t("li",[t("p",[s._v("为第三方库启用 CDN 加载")])]),s._v(" "),t("li",[t("p",[s._v("配置组件的按需加载")])]),s._v(" "),t("li",[t("p",[s._v("开启路由懒加载")])]),s._v(" "),t("li",[t("p",[s._v("自定制首页内容")])])]),s._v(" "),t("p",[s._v("如何进行企业级项目的打包发布,后面在 vue 学习中再深入了解。")])])}),[],!1,null,null,null);t.default=e.exports}}]);