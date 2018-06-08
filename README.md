# 百度ife MVVM 学院课程作业

## 1.2 用webpack4 / parcel快速搭建开发san helloworld

### 使用`webpack4`搭建环境

[webpack4中文官网](https://webpack.docschina.org/)

依据`process.env.NODE_ENV === 'production'`区分开发模式还是生产模式，两模式对应不同的`devtool`选项

`entry`参数用来指定入口文件，从入口文件开始生成依赖树

`module`参数用来为指定文件使用指定的loader

```js
    module: {
        rules: [
            {
                test,       // 指定文件类型
                exclude,    // 指定除外文件
                use,         // 指定loader
            }
        ]
    }
```

js文件如果使用babel-loader的话，需要指定presets和plugins（可选）
css文件的话，网上的建议是同时使用style-loader和css-loader

使用开发服务器`devServer`需要先安装`webpack-dev-server`

```bat
    npm i --save-dev webpack-dev-server
```

在`webpack`设置中添加`devServer`启用开发服务器

```js
    devServer: {
        contentBase,    // 指定服务路径
        index,          // 指定服务默认页面
        open,           // 指定开启服务时是否开启页面
        port,           // 指定服务启动是指定的端口号
        hot,            // 是否启用热加载
    },
```

启用热加载时需要在`plugins`中添加`new webpack.HotModuleReplacementPlugin()`（需要先require进来webpack变量）

可以在启动时动态指定mode参数来指定是为开发模式还是为生产模式，所以可以在命令中加入mode参数：

```json
    "dev": "webpack-dev-server --mode=development",
    "build": "webpack --mode=production"
```

`plugins`参数用来指定构建时使用哪些插件 -> [插件列表](https://webpack.docschina.org/plugins)

```js
    plugins: [
        new CleanWebpackPlugin(['dist']),           // 此类为需要安装的插件
        ...,
        new webpack.HotModuleReplacementPlugin(),   // 此类为webpack内置插件
        ...,
    ],
```

使用`CleanWebpackPlugin`可以自动删除dist文件夹，生产模式下使用此插件不影响，删除之后还会生成
使用`HtmlWebpackPlugin`可以动态生成入口html文件，可以动态指定title、meta等（通过options设定），不用自己在目录添加index.html
使用`NamedModulesPlugin`可以在开启热加载时显示模块路径
`HotModuleReplacementPlugin`即开启热加载HMR

`output`用于指定输出路径

```js
    output: {
        filename,
        chunkFilename,
        path,
    },
```

总觉得自己也不大能记住，在重新来一遍的话还是要费些时间找文档，
不过吧，用过一次就多一遍记忆，写一遍文档就有多一遍（即便过后不再看这个文档），下次多多少少也会省些时间的
至少基础知识我掌握了

以上

## 2.1 数据操作

### 基础表达式写法

双向绑定 `{= exp =}` > 双向绑定仅支持普通变量和属性访问表达式，否则可能导致不可预测的问题。 -- San

插值 `{{ exp }}` 本身为表达式，可使用类似angular的管道操作符，San中称为过滤器

处理事件使用`on-`前缀，例如点击事件：`on-click="reset"`

dataTypes用于验证数据类型，据说只能在开发模式下使用

initData为初始化数据，为function

数据操作相关使用`this.data`

```js
    this.data.set('key', value);
    this.data.get('key');
    this.data.merge('key', value);
    ...
```

以上

## 2.2 条件和循环

### 条件 `<td s-if="info.status === 0">待审核</td>`

### 循环 `<tr s-for="info, index in infos">`

### 数组操作

```js
this.data.push('key', item);
this.data.set(`arr[${index}].key`, value);
this.data.removeAt('arr', index);
```

可以在循环中声明一个索引，在`on-click`执行时将索引传进去（传值）。
也可以传`$event`，事件对象

以上
