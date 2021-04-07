(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{435:function(s,a,t){"use strict";t.r(a);var e=t(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"px2rem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#px2rem"}},[s._v("#")]),s._v(" px2rem")]),s._v(" "),t("p",[s._v("配方还是一样：手淘的  "),t("a",{attrs:{href:"https://github.com/amfe/lib-flexible",target:"_blank",rel:"noopener noreferrer"}},[s._v("lib-flexible"),t("OutboundLink")],1),s._v(" + rem")]),s._v(" "),t("p",[s._v("配置 flexible\n安装 lib-flexible")]),s._v(" "),t("h4",{attrs:{id:"_1-在命令行中运行如下安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-在命令行中运行如下安装"}},[s._v("#")]),s._v(" 1.在命令行中运行如下安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i lib-flexible --save\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-引入-lib-flexible"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-引入-lib-flexible"}},[s._v("#")]),s._v(" 2.引入 lib-flexible")]),s._v(" "),t("p",[s._v("在项目入口文件 main.js 里 引入 lib-flexible")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lib-flexible'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_3-添加-meta-标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加-meta-标签"}},[s._v("#")]),s._v(" 3.添加 meta 标签")]),s._v(" "),t("p",[s._v("在项目根目录的 index.html 中添加如下 meta")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("meta")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("viewport"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("content")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("width=device-width, initial-scale=1.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-px-转-rem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-px-转-rem"}},[s._v("#")]),s._v(" 4.px 转 rem")]),s._v(" "),t("p",[s._v("实际开发中，我们通过设计稿得到的值单位是 px，所以要将 px 转换成 rem 再写进样式中。\n将 px 转换成 rem 我们将使用 px2rem 这个工具，它有 webpack 的 loader："),t("a",{attrs:{href:"https://github.com/Jinjiang/px2rem-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("px2rem-loader"),t("OutboundLink")],1)]),s._v(" "),t("h4",{attrs:{id:"_5-安装-px2rem-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装-px2rem-loader"}},[s._v("#")]),s._v(" 5.安装 px2rem-loader")]),s._v(" "),t("p",[s._v("在命令行中运行如下安装：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i px2rem-loader --save-dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_6-配置-px2rem-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-配置-px2rem-loader"}},[s._v("#")]),s._v(" 6.配置 px2rem-loader")]),s._v(" "),t("p",[s._v("在 vue-cli 生成的 webpack 配置中，vue-loader 的 options 和其他样式文件 loader 最终是都是由 build/utils.js 里的一个方法生成的。")]),s._v(" "),t("p",[s._v("我们只需在 cssLoader 后再加上一个 px2remLoader 即可，px2rem-loader 的 remUnit 选项意思是 1rem=多少像素，结合 lib-flexible 的方案，我们将 px2remLoader 的 options.remUnit 设置成设计稿宽度的 1/10，这里我们假设设计稿宽为 750px。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// utils.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cssLoader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  options"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    sourceMap"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sourceMap\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" px2remLoader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'px2rem-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  options"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    remUnit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h4",{attrs:{id:"_7-并放进-loaders-数组中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-并放进-loaders-数组中"}},[s._v("#")]),s._v(" 7.并放进 loaders 数组中")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// utils.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("generateLoaders")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("loader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" loaderOptions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" loaders "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cssLoader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" px2remLoader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"_8-如果某一项不想转化为-rem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-如果某一项不想转化为-rem"}},[s._v("#")]),s._v(" 8 如果某一项不想转化为 rem")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid #ccc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* no */")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("修改配置后需要重启，然后我们在组件中写单位直接写 px，设计稿量多少就可以写多少了，舒服多了。")])])}),[],!1,null,null,null);a.default=r.exports}}]);