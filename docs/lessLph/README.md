# Less

[中文文档链接](https://less.bootcss.com/)

[英文文档链接](https://lesscss.org/)

::: tip 提示
所有代码除过官网复制过来的，都是在真实环境下通过编译的
:::

## 注释

两种注释：

编译前--->

```less
// 该注释不会被编译到css文件中
/*该注释会被编译到css文件中*/
```

编译后--->

```css
/*该注释会被编译到css文件中*/
```

## 变量

使用 `@变量名` 声明一个 less 变量。

### 作为值的变量

变量最常见的场景是作为 CSS 的属性值来使用：

**编译前**

```less
// Variables
@link-color: #428bca; // sea blue

// Usage
a,
.link {
  color: @link-color;
}

.widget {
  color: #fff;
  background: @link-color;
}
```

**编译后**

```css
a,
.link {
  color: #428bca;
}
.widget {
  color: #fff;
  background: #428bca;
}
```

### 作为选择器的变量

使用方式： `@{变量名}`

**编译前**

```less
// Variables
@my-selector: banner;

// Usage
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

**编译后**

```css
.banner {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

### 作为属性名的变量

使用方式： `@{变量名}`

**编译前**

```less
// 声明
@bc: background-color;

// 使用
.con {
  width: 100px;
  height: 100px;
  @{bc}: pink;
}
```

**编译后**

```less
.con {
  width: 100px;
  height: 100px;
  background-color: pink;
}
```

### 作为 url 的变量

**编译前**

```less
// Variables
@images: "../img";

// Usage
body {
  color: #444;
  background: url("@{images}/white-sand.png");
}
```

**编译后**

```css
body {
  color: #444;
  background: url("../img/white-sand.png");
}
```

### 延迟加载

less 变量也有作用域，其实就是大括号。

一个变量在同一作用域内只能声明一次，重复声明时后声明的会覆盖先声明的。不同作用域可以声明同名变量，且在各自作用域内不会冲突。

less 变量采用**延迟加载**的方式，即会在当前作用域样式未加载之前先加载变量，而且是由内而外，先寻找作用域内的变量，如果没有再寻找作用域外的变量（即父级作用域，如果还没有就会逐级向上直至找到为止）。

```less
// 面试题
@var: 0;

.class {
  @var: 1;

  .brass {
    @var: 2;
    three: @var;
    @var: 3;
  }

  one: @var;
}
```

**答案**

```css
.class {
  one: 1;
}
.class .brass {
  three: 3;
}
```

## 嵌套

嵌套规则允许在一个选择器中嵌套另一个选择器。

假设有这样的 CSS 代码：

```css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

用 Less 可以这样写：

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

### 父级引用

在嵌套的 less 样式中可以使用 `&` 运算符来引用当前作用域的所有父级选择器。

内层选择器前面的 & 符号表示对父选择器的引用。在一个内层选择器的前面，如果没有 & 符号，则它被解析为父选择器的后代；如果有 & 符号，它就被解析为父元素本身。

最常用于以下两种情况：

1. 对现有选择器应用伪类:

**编译前**

```less
a {
  color: blue;
  &:hover {
    color: green;
  }
}
```

**编译后**

```css
a {
  color: blue;
}
a:hover {
  color: green;
}
```

如果没有&，上面的示例内部的规则将被编译为`a :hover`，该规则匹配`<a>`标签内的所有后代元素并对其应用`:hover`伪类，这不是我们通常想要的结果。

2. 对现有选择器应用修改类

**编译前**

```less
.button {
  &-ok {
    background-image: url("ok.png");
  }
  &-cancel {
    background-image: url("cancel.png");
  }

  &-custom {
    background-image: url("custom.png");
  }
}
```

**编译后**

```css
.button-ok {
  background-image: url("ok.png");
}
.button-cancel {
  background-image: url("cancel.png");
}
.button-custom {
  background-image: url("custom.png");
}
```

通过引用父级，产生了不同的类名。

### 重复出现的&

&在选择器中可能出现多次。这使得重复引用父选择器而不重复其名称成为可能。

```less
link {
  & + & {
    color: red;
  }

  & & {
    color: green;
  }

  && {
    color: blue;
  }

  &,
  &ish {
    color: cyan;
  }
}
```

```css
.link + .link {
  color: red;
}
.link .link {
  color: green;
}
.link.link {
  color: blue;
}
.link,
.linkish {
  color: cyan;
}
```

### 深入理解

`&` 运算符代表当前作用域的所有父级作用域的选择器（有可能不仅仅是父级，而是很多祖先选择器），这样编译后的 CSS 看起来更加清晰。

```less
.grand {
  .parent {
    & > & {
      color: red;
    }

    & & {
      color: green;
    }

    && {
      color: blue;
    }

    &,
    &ish {
      color: cyan;
    }
  }
}
```

```css
.grand .parent > .grand .parent {
  color: red;
}
.grand .parent .grand .parent {
  color: green;
}
.grand .parent.grand .parent {
  color: blue;
}
.grand .parent,
.grand .parentish {
  color: cyan;
}
```

## 运算

任何数值，颜色，变量都可以运算。

如果可能的话，算术运算符在加、减或比较之前会进行单位换算。计算的结果以最左侧操作数的单位类型为准，如果第一个没有单位则顺位以第二个操作数的单位类型为准。如果单位换算无效或失去意义，则忽略单位。无效的单位换算例如：px 到 cm 或 rad 到 % 的转换。

因为 less 会自动推算单位，所以不需要每一个都加单位，但保证至少有一个加了单位。

运算符与数值之间要以空格分开，涉及优先级时以`()`进行优先级计算

less 运算遇到百分比单位，只能按照百分比计算，即百分比优先级最高。

```less
// 所有操作数被转换成相同的单位
@conversion-1: 5cm + 10mm; // 结果是 6cm
@conversion-2: 2 - 3cm - 5mm; // 结果是 -1.5cm

// conversion is impossible
@incompatible-units: 2 + 5px - 3cm; // 结果是 4px

// example with variables
@base: 5%;
@filler: @base * 2; // 结果是 10%
@other: @base + @filler; // 结果是 15%
```

## 继承

Extend 是一个 Less 伪类，它将选择器与它引用的选择器进行合并，进而实现让一个选择器继承另一个选择器的样式。

继承有两种语法：

```less
// 继承方式一：
当前选择器:extend(被继承的选择器) {

  声明块

}

// 继承方式二：
当前选择器 {

  &:extend(被继承的选择器);

  声明块

}
```

例子：

```less
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}
```

在上面的规则集中，`:extend`（继承语法）会将“继承的选择器”（`nav ul`）应用到 `.inline` 类（被继承的选择器）出现的任何位置（即合并，这样`nav ul`就有了`.inline`类的样式）。声明块保持原样，但不引用 extend(因为 extend 不是 css)。

**编译后**

```css
nav ul {
  background: blue;
}

.inline,
nav ul {
  color: red;
}
```

## 混合（Minxins）

在 LESS 中我们可以定义一些通用的属性集为一个 class，然后在另一个规则中去调用这些属性。混合就是将一系列属性从一个规则引入到另一个规则中。

混合的定义：

```less
.混合名(){
    属性的合集
};
```

混合的使用：

```less
.混合名();
```

**例子**

假设我们定义了一个 class 如下：

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

在其它规则集中使用这些属性:

```less
#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```

**编译后**

```css
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
#menu a {
  color: #111;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
.post a {
  color: red;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

::: warning 注意
定义的混合（class）也被编译出来了，而且是可以识别的 CSS 语法。
:::

定义混合和调用混合的时候可以不添加 `()`，但是为了方便区分混合和普通样式，也为了方便传参，一般我们要添加`()`。

不加小括号，则可以被编译出来；如果加上括号，则不能被编译出来，只能被调用。

同样是上面的例子，添加小括号后如下：

```less
// 定义
.bordered() {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
#menu a {
  color: #111;
  .bordered(); // 调用
}

.post a {
  color: red;
  .bordered(); // 调用
}
```

**编译后**

```css
#menu a {
  color: #111;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
.post a {
  color: red;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

可以看到添加小括号定义之后，混合（class）没有被编译出来。

::: warning 注意
可选的括号在未来的版本中将被废弃，因此建议在定义和调用混合的视乎始终添加括号。
:::

### 带参数的混合

在声明混合的时候，可以在小括号中声明形参。形参由`@变量名`定义。 调用的时候可以传入实参：

```less
// 定义
.border-radius(@radius) {
  -webkit-border-radius: @radius;
  -moz-border-radius: @radius;
  border-radius: @radius;
}

#header {
  .border-radius(4px); // 传参并调用
}
.button {
  .border-radius(6px); // 传参并调用
}
```

**编译后**

```css
#header {
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.button {
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
```

### 形参默认值

可以直接在混合中定义形参的时候，给形参设置默认值，比如（@color: red）。 当使用混合的时候，如果有实参传递，则使用实参的值，否则使用形参的默认值。

```less
// 定义
.border-radius(@radius: 5px) {
  -webkit-border-radius: @radius;
  -moz-border-radius: @radius;
  border-radius: @radius;
}

#header {
  .border-radius(); // 调用，不传参，使用默认值
}
```

**编译后**

```css
#header {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
```

### 命名参数

在使用混合的时候，如果想要指定传递的实参对应哪一个形参，则可以对实参命名。任何参数都可以通过其名称引用，并且它们不必按任何特殊顺序：

```less
// 定义
.mixin(@color: black; @margin: 10px; @padding: 20px) {
  color: @color;
  margin: @margin;
  padding: @padding;
}
.class1 {
  .mixin(@margin: 20px; @color: #33acfe); // 调用
}
.class2 {
  .mixin(#efca44; @padding: 40px); // 调用
}
```

**编译后**

```css
.class1 {
  color: #33acfe;
  margin: 20px;
  padding: 20px;
}
.class2 {
  color: #efca44;
  margin: 10px;
  padding: 40px;
}
```

### @arguments 变量

`@arguments` 变量代表所有参数集合，不想单独处理每一个参数的话，可以利用`@arguments`代替

```less
.brass1(@a:1560px, @b: 560px) {
  width: @arguments;
  height: @arguments;
}

.con {
  .brass1(@b: 1000px, @a: 50px);
}
```

**编译后**

```css
.con {
  width: 50px 1000px;
  height: 50px 1000px;
}
```

### 模式匹配

在 Less 中尝试利用模式匹配替 if/else，其执行原理类似 switch/case。 因为一个混合可能有多种形式，所以 Less 提供了一种机制，允许根据参数的值来改变 mixin 的行为。

当进行模式匹配的时候，参数是 `@_` 的混合 是必选的，即调用这个混合的时候，参数是 `@_` 的混合的属性必然会被添加到调用混合的元素中去。

```less
.mine(@_) {
  width: 300px;
  height: 100px;
}
.mine(color1) {
  background-color: red;
}

.mine(color2) {
  background-color: pink;
}

.box {
  //模式匹配到相应的混合
  //匹配的关系类似于 switch语句
  .mine(color2);
}
```

**编译后**

```css
.box {
  width: 300px;
  height: 100px;
  background-color: pink;
}
```

::: warning 注意
和定义混合的区别在于，模式匹配的参数是不带@的，而混合的参数是带@的。
:::

### 重载

相同的混合可以根据调用的时候传入的实参个数选择匹配的混合内容，从而实现不同的行为。如果你使用带有一个参数的 mixin，例如.mixin(green);，那么所有带有一个强制参数的 mixin 的属性都将被使用：

```less
.mixin(@color) {
  color-1: @color;
}
.mixin(@color, @padding: 2) {
  color-2: @color;
  padding-2: @padding;
}
.mixin(@color, @padding, @margin: 2) {
  color-3: @color;
  padding-3: @padding;
  margin: @margin @margin @margin @margin;
}
.some .selector div {
  .mixin(#008000);
}
```

**编译后**

```css
.some .selector div {
  color-1: #008000;
  color-2: #008000;
  padding-2: 2;
}
```

## 守卫（Guards）

根据判断条件选中 Mixin 的行为，类似于 JavaScript 的`if/else`，使用 `when` 语法时，Guards 允许我们使用 `>,>=,<,<=,=,`、关键字 true（只匹配关键字 true，非 true 不会匹配）、支持逻辑 `and,not ()`，同时我们可以使用“,”分割多个 Guards，其表示只要其中任意一个满足就为 true。

```less
.mixin(@q) {
  //无守卫
  height: 100px;
}

.mixin(@q) when(@q>10) {
  background-color: red;
}

.mixin(@q) when(@q<=10),
(@q>100) {
  background-color: black;
}

.box {
  border: 1px solid #000;
  .mixin(99);
}
```

**编译后**

```css
.box {
  border: 1px solid #000;
  height: 100px;
  background-color: red;
}
```

## 字符串插值

变量可以用类似 ruby 和 php 的方式嵌入到字符串中，通过 `@{name}` 这样的结构:

```less
@url: "http://www.atguigu.com/images/pic_new/";

.con {
  height: 300px;
  background: url("@{url}logo.png") 0 0 no-repeat;
}
```

## 文件导入

导入 Less 文件：`@import “lib.less”`; 等价于`@import “lib”`（可以不带后缀）

导入 css 文件：`@import "lib.css";`

## 转义

有时候，当需要引入无效的 CSS 语法或 Less 不能识别的字符，就需要使用转义字符。此时，就可以在字符串前面加一个~，并将需要转义的字符串放在 "" 中。

```less
@cc: 3;

.a {
  width: ~"@{cc}px";
}
```
