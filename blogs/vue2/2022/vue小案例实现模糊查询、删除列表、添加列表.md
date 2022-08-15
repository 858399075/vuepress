---
title: vue小案例实现模糊查询、删除列表、添加列表
date: 2022-08-13
tags:
 - vue
categories:
 - Vue2
---


# vue小案例实现模糊查询、删除列表、添加列表

### 案例简介

vue小案例实现模糊查询、删除列表、添加列表，本案例用于快速复习vue基本使用，vue指令。

bootstrap 用的是bootstrap4，在官网直接下载导入即可（v4.6.1）

vue 用的是 vue-2.6.12.js

### demo 用到的知识点：

- 创建 vue 基本实例
- v-for 循环渲染表格数据
- 状态渲染为“开关”，用的 bootstrap4 的 表单下的 Switches 组件。
- 全局过滤器格式化时间
- 添加学生功能
- 点击删除对应的列表
- 回车提交 input 输入框，（按键修饰符：keyup.enter）
- 输入关键字模糊查询（名字和年龄都能查询）

### 完整 html 代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- 导入 bootstrap 的样式表 -->
    <!-- https://v4.bootcss.com/docs/components/forms/#switches -->
    <link rel="stylesheet" href="./lib/bootstrap.css" />
    <style>
      :root {
        font-size: 13px;
      }
      body {
        padding: 8px;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <!-- 卡片区域 -->
      <div class="card">
        <h5 class="card-header">添加和查询学生</h5>
        <div class="card-body">
          <!-- 添加学生的表单 -->
          <form class="form-inline" @submit.prevent>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">学生名字</div>
              </div>
              <!-- 文本输入框 -->
              <input type="text" class="form-control" v-model="sname" @keyup.enter="addstu" />
            </div>

            <!-- 提交表单的按钮 -->
            <button type="submit" class="btn btn-primary mb-2" @click="addstu">添加学生</button>
          </form>
          <!-- 查询学生的表单 -->
          <form class="form-inline" @submit.prevent>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">输入关键字</div>
              </div>
              <!-- 文本输入框 -->
              <input type="text" class="form-control" v-model="guanjian" @keyup.enter="getstu" />
            </div>

            <!-- 提交表单的按钮 -->
            <button type="submit" class="btn btn-primary mb-2" @click="getstu">查询学生</button>
          </form>
        </div>
      </div>

      <!-- 品牌列表 -->
      <table class="table table-bordered table-striped mt-2">
        <thead>
          <tr>
            <th>#</th>
            <th>学生名字</th>
            <th>年龄</th>
            <th>状态</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <!-- 表格的主体区域 -->
        <tbody>
          <!-- TODO：循环渲染表格的每一行数据 -->
          <tr v-for="(item,i) in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" :id="item.id" v-model="item.status">
                <label class="custom-control-label" :for="item.id" v-if="item.status">已开启</label>
                <label class="custom-control-label" :for="item.id" v-else>已禁用</label>
              </div>
            </td>
            <td>{{ item.Datetime | datafamat }}</td>
            <td>
              <a href="#" @click.prevent="sdelet(item.id,i)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <script src="./lib/vue-2.6.12.js"></script>
    <script>
      // 用全局过滤器格式化时间
      Vue.filter('datafamat',(str)=> {
        const dt = new Date(str)
        const y = dt.getFullYear()
        const m = padtime(dt.getMonth())
        const d = padtime(dt.getDay())
        const hh = padtime(dt.getHours())
        const mm = padtime(dt.getMinutes())
        const ss = padtime(dt.getSeconds())
        return ` ${y}-${m}-${d} ${hh}:${mm}:${ss} `
      })
      function padtime(n){
        return n > 9 ? n: "0" + n
      }
      const Vm = new Vue({
        el:'#app',
        data:{
          nextid:5,
          sname:'',
          guanjian:'',
          list:[
            { id:1,name:'张三',age:'18',status:true,Datetime:new Date() },
            { id:2,name:'张4',age:'18',status:true,Datetime:new Date() },
            { id:3,name:'张5',age:'20',status:false,Datetime:new Date() },
            { id:4,name:'张6',age:'19',status:true,Datetime:new Date() }
          ]
        },
        methods: {
          addstu() {
            if(!this.sname) return alert('学生名字不能为空')
            this.list.push({
              id:this.nextid,
              name:this.sname,
              status:true,
              Datetime:new Date()
            })
            this.sname = ''
            this.nextid++
          },
          sdelet(e,i) {
            // this.list.splice(i,1)
            this.list.splice(i,1)
          },
          getstu() {
            this.list = this.list.filter((p)=> {
              console.log(p)
              return p.name.indexOf(this.guanjian) !== -1 || p.age.indexOf(this.guanjian) !== -1
            })
            console.log(this.list)
          }
        }
      })
    </script>
  </body>
</html>

```

导入放入 html 文件中，导入bootstrap4,导入vue，即可直接游览器打开运行。

### 运行演示：

![image-20220813233503890](https://img-blog.csdnimg.cn/e12c656f32674f57b54a8e9b20ed2be5.png)

 输入名字添加学生，添加成功自动清空输入框的值：

![image-20220813233503890](https://img-blog.csdnimg.cn/333f916fd36f41b1801ae0f501d35989.png)

输入关键可以模糊查询：

![image-20220813233503890](https://img-blog.csdnimg.cn/04b24bada777418f9ffba3d4051bf8e7.png)

点击删除会直接删除对应的列表：

![image-20220813233503890](https://img-blog.csdnimg.cn/5644cab281b94067b75e995b376c6ad4.png)

打包下载gitee地址：

```js
https://gitee.com/xingyueqianduan/vuedemomohuchaxun
```

