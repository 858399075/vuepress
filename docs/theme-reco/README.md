---
title: vue-cli 中封装 utils 下的 axios 
date: 2022-08-08
---

在项目中如果我们要请求的接口有多个，那么可以这样封装axios。

目录如下：

```js
src---
		utils---
    			request.js
    	
```

代码如下：

```js
import axios from 'axios'

const request = axios.create({
  // 指定请求的根路径
  baseURL: 'https://www.escook.cn'
})

export default request

```

如何实现封装的复用的呢，看下图：

![image-20220807230758496](https://img-blog.csdnimg.cn/b86c25c5a1d74a5bba902c8f5a1ff495.png)

封装好了后，在使用的时候导入相应的模块就可以了。
