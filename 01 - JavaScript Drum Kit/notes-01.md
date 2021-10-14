`data-xxx`赋予用户自定义类的权利，本例中的`data-key`就是Web Bos自行定义的。

字符串中使用变量时要用\`\`，变量用`${variable_name}`格式。

`[element].classList.add/remove/toggle('[class_name]')` 为选中元素新增/删除/切换一个类

取消playing属性为什么要再新建一个函数而不直接设置setTimeout(function(){}, 0.07)?
A：如果css文件中的transition时间被修改，则对应的setTimeout中的参数也要修改。