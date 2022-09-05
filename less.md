# less



## 变量

使用 `@变量名` 声明一个less变量。

1. 作为值的变量：

   ```less
   // 声明
   @pink: pink;
   // 使用
   .con{
       color:@pink;
   }
   ```

2. 作为选择器的变量和作为属性名的变量

   ```less
   // 声明
   @pink: pink;
   @con: .con;
   @bc: background-color;
   // 使用
   // 语法：@{变量名}
   @{con} {
       width: 100px;
       height: 100px;
       @{bc}: @pink;
   }
   ```

3. 作为url的变量

   ```less
   // 声明
   @bgi: url('https://www.zsxq.com/assets/img/iphone-x@2x.png');
   // 使用
   .con{
       background:@bgi;
   }
   
   // 声明
   @bgi:'https://www.zsxq.com/assets/img/iphone-x@2x.png';
   // 使用
   .con{
       background:url(@bgi);
   }
   ```

作用域（就近原则）：其实就是大括号。

一个变量在同一作用域内只能声明一次，重复声明时后声明的会覆盖先声明的。不同作用域可以声明同名变量，且在各自作用域内不会冲突。

延迟加载：less会在当前作用域样式未加载之前先加载变量，而且是由内而外，先寻找作用域内的变量，如果没有再寻找作用域外的变量。

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

## 嵌套

嵌套规则允许在一个选择器中嵌套另一个选择器：

```less
.box {
    width: 100%;
    height: 100%;
    background-color: antiquewhite;

    .con {
        background-color: salmon;
    }
}
```

### 父级引用

&：代表当前作用域的所有父级作用域的元素（有可能不仅仅是父级一个元素，而是很多祖先元素）

内层选择器前面的 & 符号就表示对父选择器的引用。在一个内层选择器的前面，如果没有 & 符号，则它被解析为父选择器的后代；如果有 & 符号，它就被解析为父元素。

```less
.box {
    width: 100%;
    height: 100%;
    background-color: antiquewhite;

    & {
        background-color: salmon;
    }
}
```

## 运算

任何数值，颜色，变量都可以运算 

less会给你自动推算单位，所以不需要每一个都加单位，但保证至少有一个加了单位 

运算符与数值之间要以空格分开，涉及优先级时以（）进行优先级计算

less运算以第一个单位优先 如果第一个没有单位则以第二个做单位

less运算遇到百分比 只能按照百分比计算 即百分比优先级最高

```less
@num1: 30%;

.box {
    .con {
        width: 150px + @num1;
    }
}
```

## 继承

less允许一个选择器继承另一个选择器的样式,

Extend有两种语法格式： 

```less
当前选择器:extend(被继承的选择器) {

  当前选择器自己的样式

}



当前选择器 {

  &:extend(被继承的选择器);

}
```

例子：

```less
//已知.public是被继承的选择器，#box是当前的选择器
.public {
    color: yellow
}

//继承方式1
#box:extend(.public) {
    color: red;
}

//继承方式2
#box {
    &:extend(.public);
    color: red;
}
```

## 混合

在 LESS 中我们可以定义一些通用的属性集为一个class，然后在另一个class中去调用这些属性。混合就是将一系列属性从一个规则引入到另一个规则中。

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

例子：

```less
.center() {
    margin: auto;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
}

.box {
    .center();
}
```

定义混合和调用混合的时候可以不添加()，但是为了方便区分混合和普通样式（也为了避免混淆混合和普通样式），也为了方便传参，一般我们要添加()

不加小括号，则可以被编译出来，如果加上括号，则不能被编译出来，只能被调用（所以为了严格区分不加小括号的混合以及普通样式，建议定义混合的时候始终添加小括号，调用的时候则无所谓）

不加小括号定义和调用混合的例子：

```less
.brass {
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
}// 可以看到这个定义和普通样式是一样的，而且这个样式还会被编译出去成为.css文件的一部分

.box {
    .brass
}
```

### 带参数的混合

在声明混合的时候，可以在小括号中声明形参。形参由`@变量名`定义。 调用的时候可以传入实参

```less
.brass(@a, @b) {
    width: @a;
    height: @b;
}

.con {
    .brass(50px,5px);
}
```

### 形参默认值

可以直接在混合中定义形参的时候，给形参设置默认值，比如（@color: red）。 当使用混合的时候，如果有实参传递，则使用实参的值，否则使用形参的默认值

```less
.brass(@a:100px, @b:200px) {
    width: @a;
    height: @b;
}

.con {
    .brass(50px);
}
```

### 命名参数 

在使用混合的时候，如果想要指定传递的实参对应哪一个形参，则可以对实参命名

```less
.brass(@a, @b: 200px) {
    width: @a;
    height: @b;
}

.con {
    .brass(@b: 1000px,@a:50px);
}
```

### arguments变量

@arguments 变量代表所有参数集合，不想单独处理每一个参数的话，可以利用@arguments 代替

```less
.brass1(@a:1560px, @b: 560px) {
    width: @arguments;
    height: @arguments;
}

.con {
    .brass1(@b: 1000px, @a: 50px);
}
```

## 模式匹配

在Less中尝试利用模式匹配替if/else，其执行原理类似switch/case。 因为一个混合可能有多种形式，所以Less提供了一种机制，允许根据参数的值来改变 mixin的行为。

当进行模式匹配的时候，参数是`@_`的混合 是必选的，即调用这个混合的时候，参数是`@_`的混合的属性必然会被添加到调用混合的元素中去

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

和定义混合的区别在于，模式匹配的参数是不带@的，而混合的参数是带@的。

## 重载

相同的混合可以根据调用的时候传入的实参个数选择匹配的混合内容，从而实现不同的行为。

```less
.mixin(@a, @b) {
    background-color: @a;
    width: 1000px;
}

.mixin(@a) {
    background-color: @a;
    width: 100px;
}

.box {
    border: 1px solid #000;
    height: 100px;
    .mixin(pink, red);
}
```

## 守卫(Guards)

根据判断条件选中Mixin的行为 类似于JavaScript的if/else，使用when语法 Guards 允许我们使用>,>=,<,<=,=,关键字true（只匹配关键字true，非true不会匹配），支持逻辑and,not () 同时我们可以使用“,”分割多个Guards，其表示只要其中任意一个满足就为true.

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

## 字符串插值

变量可以用类似ruby和php的方式嵌入到字符串中，通过**@{name}**这样的结构:

```less
@url: "http://www.atguigu.com/images/pic_new/";

.con {
  height: 300px;
  background: url("@{url}logo.png") 0 0 no-repeat;
}
```

## 文件导入

导入Less文件：`@import “lib.less”`; 等价于`@import “lib”`（可以不带后缀）

导入css文件：`@import "lib.css";`

## 转义

有时候，当需要引入无效的CSS语法或Less不能识别的字符，就需要使用转义字符。此时，就可以在字符串前面加一个~，并将需要转义的字符串放在 "" 中。

```less
@cc: 3;

.a {
  width:~"@{cc}px";
}
```