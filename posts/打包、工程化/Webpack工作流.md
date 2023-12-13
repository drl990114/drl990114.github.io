---
title: Webpack工作流
date: 2022-03-16 12:57:18
author: RuiLin Dong
permalink: /read/20220316010320
categories: 
  - 打包、工程化
tags: 
  - 模块化
  - 打包
  - 工程化
---
## Webpack
本质上，webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。

## 工作流
webpack 构建的核心任务是完成内容转化和资源合并。主要包含以下 3 个阶段：

- **初始化阶段**
  - 初始化参数：从配置文件、配置对象和Shell参数中读取并与默认参数进行合并，组合成最终使用的参数。
  - 创建编译对象：用上一步得到的参数创建 Compiler 对象。
  - 初始化编译环境：包括注入内置插件、注册各种模块工厂、初始化 RuleSet 集合、加载配置的插件等。
- **构建阶段**
  - 开始编译：执行 Compiler 对象的 run 方法，创建 Compilation 对象。
  - 确认编译入口：进入 entryOption 阶段，读取配置的 Entries，递归遍历所有的入口文件，调用 Compilation.addEntry 将入口文件转换为 Dependency 对象。
  - 编译模块： 调用 normalModule 中的 build 开启构建，从 entry 文件开始，调用 loader 对模块进行转译处理，然后调用 JS 解释器（acorn）将内容转化为 AST 对象，然后递归分析依赖，依次处理全部文件。
  - 完成模块编译：在上一步处理好所有模块后，得到模块编译产物和依赖关系图。
- **生成阶段**
  - 输出资源：根据入口和模块之间的依赖关系，组装成多个包含多个模块的 Chunk，再把每个 Chunk 转换成一个 Asset 加入到输出列表，这步是可以修改输出内容的最后机会。
  - 写入文件系统：确定好输出内容后，根据配置的 output 将内容写入文件系统。


## 深入
### 初始化阶段
简单说，初始化阶段的任务就是合并配置，并且生成 compiler 实例。

- 将 process.args + webpack.config.js 合并成用户配置
- 调用 validateSchema 校验配置
- 调用 createCompiler 创建 Compiler 对象。
- 遍历用户定义的 plugins 集合，执行插件的 apply 方法
- 触发 environment 和 afterEnvironment 上注册的事件。
- 调用 new WebpackOptionsApply().process 方法，加载各种内置插件
- 触发 initialize 事件。

### 构建阶段

![](https://user-images.githubusercontent.com/15681693/134162956-d7210d3a-2881-4d0c-b84b-0a1b813a8d0f.png)

- 在实例化 compiler 之后，执行 compiler.run()。
- 执行 newCompilation 函数，调用 createCompilation 初始化 Compilation 对象。
- 执行 _addEntryItem 将入口文件存入 this.entries（map 对象），遍历 this.entries 对象构建 chunk。
- 执行 handleModuleCreation，开始创建模块实例。
- 执行 moduleFactory.create 创建模块。
- 执行 factory.hooks.factorize.call 钩子，然后会调用 ExternalModuleFactoryPlugin 中注册的钩子，用于配置外部文件的模块加载方式。
- 使用 enhanced-resolve 解析模块和 loader 的真实绝对路径。
- 执行 new NormalModule()创建 module 实例。
- 执行 addModule，存储 module。
- 执行 buildModule，添加模块到模块队列 buildQueue，开始构建模块, 这里会调用 normalModule 中的 build 开启构建。
- 创建 loader 上下文。
- 执行 runLoaders，通过 enhanced-resolve 解析得到的模块和 loader 的路径获取函数，执行 loader。
- 生成模块的 hash。

### 生成阶段

- 构建本次编译的 ChunkGraph 对象
- 遍历 compilation.modules 集合，将 module 按 entry/动态引入 的规则分配给不同的 Chunk 对象
- compilation.modules 集合遍历完毕后，得到完整的 chunks 集合对象
- 遍历 module/chunk
- 触发 seal 回调
