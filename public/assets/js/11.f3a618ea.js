(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{405:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"es6-模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6-模块化"}},[s._v("#")]),s._v(" "),t("strong",[s._v("ES6 模块化")])]),s._v(" "),t("h2",{attrs:{id:"_1-node-js-中如何实现模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-node-js-中如何实现模块化"}},[s._v("#")]),s._v(" "),t("strong",[s._v("1. node.js 中如何实现模块化")])]),s._v(" "),t("p",[s._v("node.js 遵循了 CommonJS 的模块化规范。其中：")]),s._v(" "),t("ul",[t("li",[s._v("导入其它模块使用 require() 方法")]),s._v(" "),t("li",[s._v("模块对外共享成员使用 module.exports 对象")])]),s._v(" "),t("p",[s._v("模块化的好处：")]),s._v(" "),t("p",[s._v("大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，利人利己。")]),s._v(" "),t("h2",{attrs:{id:"_2-前端模块化规范的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-前端模块化规范的分类"}},[s._v("#")]),s._v(" "),t("strong",[s._v("2. 前端模块化规范的分类")])]),s._v(" "),t("p",[s._v("在 ES6 模块化规范诞生之前，JavaScript 社区已经尝试并提出了 AMD、CMD、CommonJS 等模块化规范。")]),s._v(" "),t("p",[s._v("但是，这些由社区提出的模块化标准，还是存在一定的差异性与局限性、并不是浏览器与服务器通用的模块化")]),s._v(" "),t("p",[s._v("标准，例如：")]),s._v(" "),t("ul",[t("li",[s._v("AMD 和 CMD 适用于浏览器端的 Javascript 模块化")]),s._v(" "),t("li",[s._v("CommonJS 适用于服务器端的 Javascript 模块化")])]),s._v(" "),t("p",[s._v("太多的模块化规范给开发者增加了学习的难度与开发的成本。因此，大一统的 ES6 模块化规范诞生了！")]),s._v(" "),t("h2",{attrs:{id:"_3-什么是-es6-模块化规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么是-es6-模块化规范"}},[s._v("#")]),s._v(" "),t("strong",[s._v("3. 什么是 ES6 模块化规范")])]),s._v(" "),t("p",[s._v("ES6 模块化规范是浏览器端与服务器端通用的模块化开发规范。它的出现极大的降低了前端开发者的模块化学")]),s._v(" "),t("p",[s._v("习成本，开发者不需再额外学习 AMD、CMD 或 CommonJS 等模块化规范。")]),s._v(" "),t("p",[s._v("ES6 模块化规范中定义：")]),s._v(" "),t("ul",[t("li",[s._v("每个 js 文件都是一个独立的模块")]),s._v(" "),t("li",[s._v("导入其它模块成员使用 import 关键字")]),s._v(" "),t("li",[s._v("向外共享模块成员使用 export 关键字")])]),s._v(" "),t("h2",{attrs:{id:"_4-在-node-js-中体验-es6-模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-在-node-js-中体验-es6-模块化"}},[s._v("#")]),s._v(" "),t("strong",[s._v("4. 在 node.js 中体验 ES6 模块化")])]),s._v(" "),t("p",[s._v("node.js 中默认仅支持 CommonJS 模块化规范，若想基于 node.js 体验与学习 ES6 的模块化语法，可以按照")]),s._v(" "),t("p",[s._v("如下两个步骤进行配置：")]),s._v(" "),t("p",[s._v("① 确保安装了 v14.15.1 或更高版本的 node.js（node - v）")]),s._v(" "),t("p",[s._v('② 在 package.json 的根节点中添加 "type": "module" 节点')]),s._v(" "),t("h2",{attrs:{id:"_5-es6-模块化的基本语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-es6-模块化的基本语法"}},[s._v("#")]),s._v(" "),t("strong",[s._v("5. ES6 模块化的基本语法")])]),s._v(" "),t("p",[s._v("ES6 的模块化主要包含如下 3 种用法：")]),s._v(" "),t("p",[s._v("① 默认导出与默认导入")]),s._v(" "),t("p",[s._v("② 按需导出与按需导入")]),s._v(" "),t("p",[s._v("③ 直接导入并执行模块中的代码")]),s._v(" "),t("h3",{attrs:{id:"_5-1-默认导出与默认导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-默认导出与默认导入"}},[s._v("#")]),s._v(" "),t("strong",[s._v("5.1 默认导出与默认导入")])]),s._v(" "),t("p",[t("strong",[s._v("默认导出")])]),s._v(" "),t("p",[s._v("默认导出的语法： export default 默认导出的成员")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("show")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  n1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  show\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("strong",[s._v("默认导入")])]),s._v(" "),t("p",[s._v("默认导入的语法： import 接收名称 from '模块标识符'")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" m1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./01.默认导出.js'")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("默认导出的注意事项")])]),s._v(" "),t("p",[s._v("每个模块中，只允许使用唯一的一次 export default，否则会报错！")]),s._v(" "),t("p",[t("strong",[s._v("默认导入的注意事项")])]),s._v(" "),t("p",[s._v("默认导入时的接收名称可以任意名称，只要是合法的成员名称即可")]),s._v(" "),t("h3",{attrs:{id:"_5-2-按需导出与按需导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-按需导出与按需导入"}},[s._v("#")]),s._v(" "),t("strong",[s._v("5.2 按需导出与按需导入")])]),s._v(" "),t("p",[t("strong",[s._v("按需导出")])]),s._v(" "),t("p",[s._v("按需导出的语法： export 按需导出的成员")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" s1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aaa'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" s2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ccc'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("strong",[s._v("按需导入")])]),s._v(" "),t("p",[s._v("按需导入的语法： import { s1 } from '模块标识符'")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" str2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" say "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./03.按需导出.js'")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("say"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("strong",[s._v("按需导出与按需导入的注意事项")])]),s._v(" "),t("p",[s._v("① 每个模块中可以使用多次按需导出")]),s._v(" "),t("p",[s._v("② 按需导入的成员名称必须和按需导出的名称保持一致")]),s._v(" "),t("p",[s._v("③ 按需导入时，可以使用 as 关键字进行重命名")]),s._v(" "),t("p",[s._v("④ 按需导入可以和默认导入一起使用")]),s._v(" "),t("h3",{attrs:{id:"_5-3-直接导入并执行模块中的代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-直接导入并执行模块中的代码"}},[s._v("#")]),s._v(" "),t("strong",[s._v("5.3 直接导入并执行模块中的代码")])]),s._v(" "),t("p",[s._v("如果只想单纯地执行某个模块中的代码，并不需要得到模块中向外共享的成员。此时，可以直接导入并执行模")]),s._v(" "),t("p",[s._v("块代码，")]),s._v(" "),t("p",[s._v("05.js 示例代码如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("执行的代码如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接执行并导入模块代码，不需要得到模块向外共享的成员")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./05.js'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);