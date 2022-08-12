---
title: vue基础总结
date: 2022-07-19
tags:
 - vue
categories:
 - Vue2
---

# vue基础总结


## 1.vue基本指令

#### 1.1内容渲染指令

```vue
v-text 缺点:覆盖元素中的默认内容

{{ }} 插值只能用在元素的内容节点，无法用在属性节点

v-html 用处：把带有HTML标签的字符串，渲染为真正的DOM元素

```

**代码如下：** 

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>
</head>
<body>
    <div id="app">
        <p>姓名:{{ username }}</p>
        <p>性别:{{ gender }}</p>
        <div v-html="info"></div>
    </div>
 
    <!-- 导入vue的库文件 -->
    <script src="./lib/vue-2.6.12.js"></script>
    
    <!-- 创建vue的实例对象 -->
    <script>
        const vm = new Vue({
            // 表示当前vm实例要控制页面上的哪个区域，接收的值是一个选择器
            el: '#app',
            // data对象就是要渲染到页面上的数据
            data: {
                username: '星月',
                gender: '男',
                info: '<h4 style="color: red;">星月前端</h4>'
            }
        })
    </script>
</body>
</html>
```



#### 1.2 属性绑定指令

**v-bind:**

**简写  : （v-bind:可以简写为英文的':',若需要动态拼接字符串，需要在字符串的外层加上单引号）**

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>
</head>
<body>
    <div id="app">
        <input type="text" :placeholder="tips">
        <hr>
        <img :src="photo" style="width: 150px">
        <hr>
        <div>1+2的结果是：{{ 1 + 2 }}</div>
        <div>{{ tips }}反转后的结果为：{{ tips.split('').reverse().join('') }}</div>
        <div :title="'box' + index">这是一个div</div>
    </div>
 
    <!-- 导入vue的库文件 -->
    <script src="./lib/vue-2.6.12.js"></script>
    
    <!-- 创建vue的实例对象 -->
    <script>
        const vm = new Vue({
            // 表示当前vm实例要控制页面上的哪个区域，接收的值是一个选择器
            el: '#app',
            // data对象就是要渲染到页面上的数据
            data: {
                tips: '请输入用户名:',
                photo: '这里是url地址',
                index: 2,
            }
        })
    </script>
</body>
</html>
```



#### 1.3 事件绑定指令

**v-on:**

**简写 @**

```vue
@click = “show”和@click=“show（传参）”


```

功能：点击按钮，增加减少count数值。

演示如图：

![image-20220719202033534](https://img-blog.csdnimg.cn/5ea84f050647438d9b94e149be920c36.png)

代码如下：

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>
</head>
<body>
    <div id="app">
        <p>count的值是：{{ count }}</p>
        <button @click="add(3)">+ n</button>
        <button @click="sub(4)">- n</button>
    </div>
 
    <!-- 导入vue的库文件 -->
    <script src="./lib/vue-2.6.12.js"></script>
    
    <!-- 创建vue的实例对象 -->
    <script>
        const vm = new Vue({
            // 表示当前vm实例要控制页面上的哪个区域，接收的值是一个选择器
            el: '#app',
            // data对象就是要渲染到页面上的数据
            data: {
                count: 0,
            },
            // 定义事件的处理函数
            methods: {
                add (n) {
                    this.count += n;
                },
                sub (n) {
                    this.count -= n;
                }
            }
        })
    </script>
</body>
</html>
```



**内置事件对象、变量 $event**

```vue
@click="show(3,$event)"
```

功能：

- 点击按钮，增加减少count，并修改按钮背景颜色；
- 点击加号按钮，偶数为粉色，奇数为透明，点击减号按钮，偶数为红色，奇数为透明。


演示如图：

![image-20220719202159000](https://img-blog.csdnimg.cn/bb0847c764ec48bb91e0a7196d1e20c4.png)

代码如下：

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>
</head>
<body>
    <div id="app">
        <p>count的值是：{{ count }}</p>
        <button @click="add(1,$event)">+ n</button>
        <button @click="sub(1,$event)">- n</button>
    </div>
 
    <!-- 导入vue的库文件 -->
    <script src="./lib/vue-2.6.12.js"></script>
    
    <!-- 创建vue的实例对象 -->
    <script>
        const vm = new Vue({
            // 表示当前vm实例要控制页面上的哪个区域，接收的值是一个选择器
            el: '#app',
            // data对象就是要渲染到页面上的数据
            data: {
                count: 0,
            },
            // 定义事件的处理函数
            methods: {
                add (n,e) {
                    this.count += n;
                    // 判断this.count的值是否为偶数
                    if(this.count % 2 === 0){
                        e.target.style.backgroundColor = 'pink'
                    }else {
                        e.target.style.backgroundColor = ''
                    }
                },
                sub (n,e) {
                    this.count -= n;
                    if(this.count % 2 === 0){
                        e.target.style.backgroundColor = 'red'
                    }else {
                        e.target.style.backgroundColor = ''
                    }
                }
            }
        })
    </script>
</body>
</html>
```



**事件修饰符.prevent和.stop**

功能：

- 点击链接，取消默认跳转事件。
- 点击按钮，阻止默认冒泡行为。


```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>01vue初体验</title>
</head>
<body>
    <div id="app">
        <!-- 阻止默认行为 -->
        <a href="http://www.baidu.com" @click.prevent="show">跳转到百度首页</a>
        <!-- 阻止事件冒泡 -->
        <div style="box-sizing: border-box;padding-left:20px;height: 100px;width: 100px;line-height:100px;background-color: purple;" @click="divHandle">
            <button style="width:30px;" @click.stop="btnHandle"></button>
        </div>
    </div>
 
    <!-- 导入vue的库文件 -->
    <script src="./lib/vue-2.6.12.js"></script>
    
    <!-- 创建vue的实例对象 -->
    <script>
        const vm = new Vue({
            // 表示当前vm实例要控制页面上的哪个区域，接收的值是一个选择器
            el: '#app',
            // data对象就是要渲染到页面上的数据
            methods: {
                show(e) {
                    console.log('点击了链接')
                },
                divHandle() {
                    console.log('divHandle')
                },
                btnHandle() {
                    console.log('btnHandle')
                },
            }
        })
    </script>
</body>
</html>
```

**按键修饰符  .esc  .enter**

- 按键修饰符，用于判断详细的案件；

- 点击第一个输入框，按下ESC键，触发clearInput；

- 点击第二个输入框，按下ENTER键，触发submit。


演示如图：

![image-20220719202329314](https://img-blog.csdnimg.cn/1e21de6907414643a45d354c823c683f.png)

代码如下：

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>
</head>
<body>
    <div id="app">
        <input type="text" @keyup.esc="clearInput">
        <input type="text" @keyup.enter="submit">
 
    </div>
 
    <!-- 导入vue的库文件 -->
    <script src="./lib/vue-2.6.12.js"></script>
    
    <!-- 创建vue的实例对象 -->
    <script>
        const vm = new Vue({
            // 表示当前vm实例要控制页面上的哪个区域，接收的值是一个选择器
            el: '#app',
            // data对象就是要渲染到页面上的数据
            data: {},
            methods: {
                clearInput() {
                    console.log('触发了esc按钮');
                },
                submit() {
                    console.log('触发了enter按钮');
                }
            }
        })
    </script>
</body>
</html>
```



#### 1.4 双向数据绑定指令

- **v-model只能用在表单元素上**
- **v-model:双向绑定，既有数据源到页面，也有页面到数据源，在不操作DOM的前提下，快速获取表单的数据(v-bind是单向绑定，只有数据源到页面）**

功能：用户输入的数据更改后，数据源的数据自动更改；

数据源的数据更改后，用户界面的数据也更改。代码如下：

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>
</head>
<body>
    <div id="app">
        <!-- input输入框 -->
        <p>用户名：{{ username }}</p>
        <input type="text" v-model="username">
        <hr>
        <!-- textarea -->
        <textarea v-model="text" name="" id="" cols="30" rows="10"></textarea>
        <!-- select下拉框 -->
        <select v-model="city" name="" id="">
            <option value="">请选择</option>
            <option value="1">云南</option>
            <option value="2">四川</option>
        </select>
    </div>
 
    <!-- 导入vue的库文件 -->
    <script src="./lib/vue-2.6.12.js"></script>
    
    <!-- 创建vue的实例对象 -->
    <script>
        const vm = new Vue({
            // 表示当前vm实例要控制页面上的哪个区域，接收的值是一个选择器
            el: '#app',
            // data对象就是要渲染到页面上的数据
            data: {
                username: 'xingyue',
                text: '76020220',
                city: ''
            },
            methods: {
                
            }
        })
    </script>
</body>
</html>
```



- **v-model的修饰符  .number  .trim  .lazy**
- **.number:自动将用户的输入值转为数值类型**

- **.trim:自动过滤用户输入的首尾空白符**

- **.lazy:在"change"时而非"input"时更新**

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>
</head>
<body>
    <div id="app">
        <input type="text" v-model.number="n1"> + <input type="text" v-model.number="n2"> = {{ n1 + n2 }};
        <hr>
        <input type="text" v-model.lazy="username">
        <button @click="showName">获取用户名</button>
        
    </div>
 
    <!-- 导入vue的库文件 -->
    <script src="./lib/vue-2.6.12.js"></script>
    
    <!-- 创建vue的实例对象 -->
    <script>
        const vm = new Vue({
            // 表示当前vm实例要控制页面上的哪个区域，接收的值是一个选择器
            el: '#app',
            // data对象就是要渲染到页面上的数据
            data: {
                username: 'xingyue',
                n1: 1,
                n2: 2
            },
            methods: {
                showName() {
                    console.log(`用户名是：${this.username}`)
                }
            }
        })
    </script>
</body>
</html>
```



#### 1.5 循环渲染指令

```vue
v-for="(item,index) in 数组" (基于一个数组循环渲染一个列表结构)
:key="item.id"  拿索引当key是没有意义的，一般拿id做key
```

功能：动态生成表格。

效果如图：

![image-20220719195749836](https://img-blog.csdnimg.cn/364c2583e8ca488d835da6aae6ff45b0.png)

代码如下：

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>
    <link rel="stylesheet" href="./lib/bootstrap.css">
</head>
<body>
    <div id="app">
        <table class="table table-borderd table-hover table-striped">
            <thead>
                <th>索引</th>
                <th>id</th>
                <th>姓名</th>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list">
                    <td>{{ index }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
 
    <!-- 导入vue的库文件 -->
    <script src="./lib/vue-2.6.12.js"></script>
    
    <!-- 创建vue的实例对象 -->
    <script>
        const vm = new Vue({
            // 表示当前vm实例要控制页面上的哪个区域，接收的值是一个选择器
            el: '#app',
            // data对象就是要渲染到页面上的数据
            data: {
                list: [
                    {id: 1,name: '张三'},
                    {id: 2,name: '张四'},
                    {id: 3,name: '张五'}
                ]
            }
        })
    </script>
</body>
</html>
```





#### 	1.6 条件渲染指令

**v-if （动态的创建和移除元素）v-else-if   v-else（一般都用v-if）**

结构图：

![image-20220719202512852](https://img-blog.csdnimg.cn/c7b96491d1994b09bc1ae20195c55e72.png)

**v-show 动态添加和移出 display:none 样式**

结构图：

![image-20220719202535549](https://img-blog.csdnimg.cn/86f8ae1e747d4cedb6c8dea6bbe6281f.png)

```vue
代码如下：
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>
</head>
<body>
    <div id="app">
        <div v-if="flag">v-if</div>
        <div v-show="flag">v-show</div>
    </div>
 
    <!-- 导入vue的库文件 -->
    <script src="./lib/vue-2.6.12.js"></script>
    
    <!-- 创建vue的实例对象 -->
    <script>
        const vm = new Vue({
            // 表示当前vm实例要控制页面上的哪个区域，接收的值是一个选择器
            el: '#app',
            // data对象就是要渲染到页面上的数据
            data: {
                flag: true
            }
        })
    </script>
</body>
</html>
```



#### 	1.7 过滤器

```vue
全局过滤器 Vue.filter('名字',function(过滤器前面的值){return结果})

私有过滤器 定义到组件的filters 节点之下

调用 {{ message | dateFormat }}

```

**（1）局部过滤器：**

eg:先演示一个过滤器小例子：

```vue
<div id="app">
    <p>电脑价格：{{price | addPriceIcon}}</p>
</div>
 
<script>
 let vm = new Vue({
    el:"#app",
    data:{
        price:200
    },
    filters:{
        //处理函数
        addPriceIcon(value){
            console.log(value)//200
            return '¥' + value
        }
    }
 })
</script>
```

上边代码，我的需求是想把价格前面加上人民币符号（¥）,模板中文本后边需要添加管道符号（ | ）作为分隔，管道符 | 后边是文本的处理函数，处理函数的第一个参数是：管道符前边的——文本内容，如果处理函数上边传递参数，则从第二个参数依次往后是传递的参数。



eg:下面例子是（把输入的英文首字母大写，如果连续输入，以空格隔开）

```vue
<div id="app">
    //输入框
    <input type="text" v-model="content" @change="changeEvent">
     //显示层，后边加一个过滤器处理函数，把英文首字母变为大写
    <h3>{{viewContent | changeCapitalLetter}}</h3>
</div>
 
<script>
 let vm = new Vue({
    el:"#app",
    data:{
        viewContent:"",
        content:""    
    },
    methods:{
        changeEvent(){
            this.viewContent = this.content;
        }
    },
    filters:{
        changeCapitalLetter(value){//value是输入框的内容，也是要显示的内容
            if(value){
                let str = value.toString();
                //获取英文，以空格分组把字符串转为数组，遍历每一项，第一项转为大写字母
                let newArr = str.split(" ").map(ele=>{
                   return ele.charAt(0).toUpperCase() + ele.slice(1)
                });
                return newArr.join(" ")  //数组转字符串 以空格输出。。。
            }
        }
    }
 })
</script>
```

显示：（首字母变为大写）：

![image-20220719202751482](https://img-blog.csdnimg.cn/e16d0fa3cbae4f7c8014e5ab60f74133.png)

**（2）全局过滤器（重点！！！）**

全局过滤器使用：

```vue
<div id="app">
    <h3>{{viewContent | addNamePrefix}}</h3>
</div>
<script>
    Vue.filter("addNamePrefix",(value)=>{
        return "my name is" + value
    })
 
    let vm = new Vue({
        el:"#app",
        data:{
            viewContent:"星月" 
        }
    })
</script>
```

上边代码，全局过滤器，

参数一：是过滤器的名字，也就是管道符后边的处理函数；

参数二：处理函数，处理函数的参数同上；

**（补充）在实际开发中，全局过滤器经常会被用在数据（比如时间、日期的装饰）上边，通常我们会把处理函数给抽离出去，统一放在一个.js文件中，下边用代码说下**

```js
//filter.js 文件
 
let filter_price = function (val,...params){
    return "¥" + val
}
let filter_date = function (){
    return "2019/10/20" + val
}
export {filter_price,filter_date} //导出过滤函数
```

**下边在main.js中 导入 上边 filter.js文件 ，当然你也可以在任何组件中导入 filter.js这个文件，但是对于全局过滤器来说，最好是在main.js中定义，规范些，导入的是一个对象，所以使用Object.keys（）方法，得到一个由key组成的数组，遍历数据，让key作为全局过滤器的名字，后边的是key对应的处理函数，这样在任何一个组件中都可以使用全局过滤器了：**

```js
//main.js
 
//下边是2种导入方式，推荐第一种
import * as _filter from './filters/filter'
// import {filter_price,filter_date} from './filters/filter'
 
console.log(_filter)
 
Object.keys(_filter).forEach(item=>{
  Vue.filter(item,_filter[item])
})
 
new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
```

**在news.vue组件中使用 全局过滤器：**

```vue
<template>
    <div>
      <h1>{{price | filter_price}}</h1>
    </div>
</template>
 
<script>
export default {
    name:'news',
    data(){
        return{
            price:1200
        }
    }  
}
</script>
```

![image-20220719202900269](https://img-blog.csdnimg.cn/00b8d1f8c5c748cf9a78a966604b44dd.png)

![image-20220719201639569](https://img-blog.csdnimg.cn/2c42af8a14b240cdbe0d4fb6ad2dcb94.png)

**到这里vue的基本指令就差不多了! come on!**



## 2.vue的其他语法

#### 	2.1 watch(监控)的两种格式

-  watch可以监听简单属性值及其对象中属性值的变化。

-  watch类似于onchange事件,可以在属性值修改的时候,执行某些操作。


2.1.1 方法格式

简单

```js
username（newVal,oldVal）{}
```

2.1.2 对象格式

```js
username:{
	handler(newVal,oldVal){}
	deep:true,
	immediate:true
}
```

**语法如下：**

```js
var app = new Vue({
    el:"#app",
    data:{
        message:"星月",
        person:{"name":"xingyue", "age":21}
    },
    //watch监听
    watch:{
        //监听message属性值,newValue代表新值,oldValue代表旧值
        message(newValue, oldValue){
        	console.log("新值：" + newValue + "；旧值：" + oldValue);
        },
        //监控person对象的值,对象的监控只能获取新值
        person: {
            //开启深度监控；监控对象中的属性值变化
            deep: true,
            //获取到对象的最新属性数据(obj代表新对象)
            handler(obj){
                console.log("name = " + obj.name + "; age=" + obj.age);
            }
        }
    }
});

```



#### 2.2  计算属性computed

- ​	**计算属性就是一个提前定义好的方法, 该方法可以看作是一个特殊的值, 可以在插值表达式中使用；**

- ​	**在定义的时候要定义为function，在使用的时候，当作普通属性使用即可；**
- ​	**在template模板结构中可以使用；**

- ​	**在methods方法中，可以使用this.计算属性的名字；**

- ​	**要return一个计算的结果；**

- ​	**只要任何一个依赖的数据项发生了变化，计算属性就会重新计算值；**

**语法如下：**

```js
 var app = new Vue({
     el:"#app",
     //计算属性必须放在Vue的computed中
     computed:{
         //定义计算属性
         属性名(){
             return "返回值";
         }
     }
});

```

下面是示例中的部分代码：

```js
computed: {
    // 动态计算出全选的状态是 true 还是 false
    fullState() {
      return this.list.every(item => item.goods_state)
    },
    // 已勾选商品的总价格
    amt() {
      // 1. 先 filter 过滤
      // 2. 再 reduce 累加
      return this.list
        .filter(item => item.goods_state)
        .reduce((total, item) => (total += item.goods_price * item.goods_count), 0)
    }
  }
```

#### 	2.3 vue-cli

全局安装

**npm install@vue/cli -g**

创建项目

**vue create 项目名称**



**vue组件的构成：**

```vue

<template>
  
</template>

<script>
export default {

}
</script>

<style>

</style>

/*  
template   只能有唯一的根节点

script :

		export default{}

		vue 中的data必须是方法

style：

		启用less语法：lang="less"

		防止组件之间样式冲突：scoped     /deep/ 深度选择器  在需要覆盖第三方样式的时候，会用到
*/




```

#### 2.4 props

**极大的提高了组件的复用性！**

定义props有两种格式

- ​	数组格式：简单  props['init']

- ​	对象格式：定义的时候稍微复杂，


```js
props:{
	init:{
		type:Number,
		default:0,
		required:true
	}
}
```

下面是实例中的一部分：

```js
export default {
	props: {
	//商品id
    id: {
      required: true,
      type: Number
    },
    // 要渲染的商品的标题
    title: {
      default: '',
      type: String
    },
    // 要渲染的商品的图片
    pic: {
      default: '',
      type: String
    }
  }
}
```

- **type：是指定属性的类型，例如：Number,String,Boolean。**
- **default:是指定这个属性的默认值，例如购物的个数，我们可以指定默认为1个。**

- **required:true代表这个属性是必传的属性，没传就会报错。**

- **props是只读的，因此在项目开发中，不要直接修改它的值，应该把props的值，‘转存’到data中，修改data的值。**




#### 2.4 生命周期

概念：

**（1）每个组件从创建->运行->销毁的一个过程，强调的是一个时间段！**

**（2）三个重要的阶段：**

- ​	**创建阶段**：


​						beforeCreate    **create**(发起Ajax最早的时机，请求数据)    beforeMount   **mounted**（组件第一被渲染到游览器中，操作DOM的最早时机）

- ​	**运行阶段**：


​						beforeUpdate   **updated**（能够操作最新的DOM元素）

- ​	**销毁阶段**：


​						beforeDestroy   destroyed



**（3）官方的vue完整的生命周期图如下：**

![](https://img-blog.csdnimg.cn/60281b28ef3944e182ead9416d4185d5.png)





## 3.组件之间的数据共享

**组件的基本使用**

**1.导入：**

```vue
<script>
import Counter from '@/components/Counter/Counter.vue'
</script>
```

**2.注册：**

```vue
export default {
	components: {
    	Counter
  	}
  }
```

**3.使用：**

```vue
<Counter :num="count" :id="id"></Counter>
```



#### 	3.1  父向子通讯 

- **概述**：子组件无法直接使用父组件中的数据, 如果需要使用, 则必须由父组件把数据传递给子组件才可以，本质: 让子组件中的属性与父组件中的属性进行关联绑定, 然后子组件使用该属性, 这样才能做到数据传递。

- **自定义属性**：子组件中，通过props来自定义属性，父组件中，负责把数据，通过v-bind: 绑定给子组件

eg：父组件把id，num值传递给子组件：

**1.子组件Counter的关键代码：**

```js
export default {
  props: {
    // 接收商品的 id 值，将来，使用 EventBus 方案，
    // 把数量传递到 App.vue 的时候，需要通知 App 组件，更新哪个商品的数量
    id: {
      type: Number,
      required: true
    },
    // 接收到的 num 数量值
    num: {
      type: Number,
      default: 1
    }
  }
 }
```

**2.父组件关键代码：**

```vue
//父组件中使用组件的时候绑定子组件porops中的属性即可使用。
<Counter :num="count" :id="id"></Counter>
```



#### 	3.2  子向父通讯

**（1）自定义事件**：

- **在子组件中调用this.$emit()来触发自定义事件，参数1：字符串，表示自定义事件的名称，参数2：值，要发送给父组件的数据。**
- **在父组件中，通过v-on: 来绑定自定义事件，并提供一个事件处理函数。通过事件处理函数的形参，接收到子组件传递过来的数据。**



1.子组件中部分代码：

```vue
<input type="checkbox" class="custom-control-input" :id="'cb' + id" @change="stateChange" />

export default {
	methods: {
    // 只要复选框的选中状态发生了变化，就会调用这个处理函数
    stateChange(e) {
      const newState = e.target.checked
      // 触发自定义事件
      this.$emit('state-change', { id: this.id, value: newState })
    }
  }
}
```



2.父组件中部分代码如下：

```vue
//@绑定子组件中的事件
<Goods
      v-for="item in list"
      :key="item.id"
      :id="item.id"@state-change="getNewState"
 ></Goods>

 //接收子组件中事件传递过来的事件数据并处理
 export default {
 	 methods: {
 	 	getNewState(e) {
      this.list.some(item => {
        if (item.id === e.id) {
          item.goods_state = e.value
          // 终止后续的循环
          return true
        }
      })
    }
 }
}
```



**（2）如果  子到父再到父  ，有多层的话也可以使用下面的兄弟组件共享数据的方法。**



#### 	3.3 兄弟组件共享数据

**EventBus**：

##### 1.数据发送方：

- **导入eventBus.js，代码为：import bus from './eventBus.js'**	
- **bus.$emit('要触发事件的名字',要发送的数据)**



**（1）在发送方组件中调用bus.$emit()**

```vue
<script>
import bus from '@/components/eventBus.js'
</script>

export default {
	methods: {
		add() {
      // 要发送给 App 的数据格式为 { id, value }
      // 其中，id 是商品的 id; value 是商品最新的购买数量
      const obj = { id: this.id, value: this.num + 1 }
      // 要做的事情：通过 EventBus 把 obj 对象，发送给 App.vue 组件
      bus.$emit('share', obj)
    	}
	}
}
```

##### 2.EventBus 模块：

- **创建vue的实例对象new Vue()**
- **向外导出Vue的实例对象，export default new Vue()**



**新建一个eventBus.js的文件，代码如下：**

```js
import Vue from 'vue'

export default new Vue()

```

##### 3.数据接收方：

- **导入eventBus.js，import bus from './eventBus.js'**
- **bus.$on('要声明的自定义事件的名字',事件的处理函数)**
- **通过事件处理函数的形参，可以接收到发送过来的数据**
- **在数据接收方的created 生命周期函数中，调用bus.$on()方法**



**数据接收方代码如下:**

```js
<script>
import bus from '@/components/eventBus.js'
</script>

export default {
	created() {
    bus.$on('share', val => {
      this.list.some(item => {
        if (item.id === val.id) {
          item.goods_count = val.value
          return true
        }
      })
    })
  }
}
```

