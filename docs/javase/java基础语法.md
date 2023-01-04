---
# NavLink
prev:
    text: 环境变量配置
    link: /javase/环境变量配置.md
# NavLink
next:
    text: 面向对象核心思想
    link: /javase/java面向对象.md
---
# java基础语法
[https://docs.oracle.com/javase/specs/jls/se17/html/index.html](https://docs.oracle.com/javase/specs/jls/se17/html/index.html)

[java官方技术文档目录](https://docs.oracle.com/en/java/javase/17/)

[java语言规范官方文档地址](https://docs.oracle.com/javase/specs/index.html)

## 注意事项
[阿里巴巴JAVA开发手册 https://developer.aliyun.com/ebook/394?spm=a2c6h.20345107.ebook-index.20.34af7863zlzmb7](https://developer.aliyun.com/ebook/394?spm=a2c6h.20345107.ebook-index.20.34af7863zlzmb7)

编写java程序时,应该注意一下几点:
* **严格区分大小写**:Java是大小写敏感的,意味着在书写代码时Hello和hello是不同的语义。
* **代码末尾添加分号**:Java是一门严格的编程语言,在每一行代码的末尾需要添加分号。
* **源文件名**:源文件(.java文件)和必须类名相同,在保存文件的使用应该使用类名去保存,编译后的.class文件的名称就是类名,方便编译和运行
* **代码缩进**:良好的代码缩进,可以使代码更整洁,工整，方便进行代码错误的检查。
* **等号前后添加分号**:等号前后加空格,变量的使用工整,方便查看和修改错误。
* **良好的注释习惯**:规范和工整的注释可以方便自己和他人阅读代码.
* **主方法的入口**:所有的 Java 程序由 public static void main(String[] args) 方法开始执行。

## 注释
编写程序时总需要为程序添加一些注释，用以说明某段代码的作用，或者说明某个类的用途、某个方法的功能，以及该方法的参数和
返回值的数据类型及意义等。

注释的分类:
* 文档注释
* 单行注释
* 文档注释
```java
class Demo{
	public static void main(String [] args){
	// 单行注释
	// 系统的控制台输出字符串 Hello World
		System.out.println("Hello World");
	}
}
```
```java
class Demo{
	public static void main(String [] args){
	/*
	良好的代码是一定要有注释的:
	1. 代码的说明
	2. 方便自己和他人阅读,代码的可读性增强
	3. 文档可以使用javadoc生成API帮助文档提供他人使用(代码说明书)
	*/
		System.out.println("Hello World");
	}
}
```
Java语言还提供了一种功能更强大的注释形式：文档注释。如果 编写Java源代码时添加了合适的文档注释，然后通过JDK提供的
javadoc工具可以直接将源代码里的文档注释提取成一份系统的API文档。

[JDK11官方的API文档下载](https://www.oracle.com/java/technologies/javase-jdk11-doc-downloads.html)

```java
/**
*@author joke
*@date 2022-04-05 14:20:36
*@description this is a test java demo
*@version 1.0
**/
class Demo{
	/**
	* 成员属性
	*/
	private String name;
	/**
	* java程序的主入口
	*/ 
	public static void main(String [] args){
		System.out.println("Hello World");
	}
}
```
> 阿里巴巴JAVA帮助手册规定:
1. 【<span style="color:#EF4444">强制</span>】类、类属性、类方法的注释必须使用 Javadoc 规范，使用/**内容*/格式，不得使用
   // xxx 方式。
   说明：在 IDE 编辑窗口中，Javadoc 方式会提示相关注释，生成 Javadoc 可以正确输出相应注释；在 IDE
   中，工程调用方法时，不进入方法即可悬浮提示方法、参数、返回值的意义，提高阅读效率。
2. 【<span style="color:#EF4444">强制</span>】所有的抽象方法（包括接口中的方法）必须要用 Javadoc 注释、除了返回值、参数、
   异常说明外，还必须指出该方法做什么事情，实现什么功能。
   说明：对子类的实现要求，或者调用注意事项，请一并说明。
3. 【<span style="color:#EF4444">强制</span>】所有的类都必须添加创建者和创建日期。
   说明：在设置模板时，注意 IDEA 的@author 为`${USER}`，而 eclipse 的@author 为`${user}`，大小写有
   区别，而日期的设置统一为 yyyy/MM/dd 的格式。
   <span style="color:#34d399">正例:</span>
   /**
* @author yangguanbao
* @date 2016/10/31
  */
4. 【<span style="color:#EF4444">强制</span>】方法内部单行注释，在被注释语句上方另起一行，使用//注释。方法内部多行注释使
   用/* */注释，注意与代码对齐。

## 标识符
Java 所有的组成部分都需要名字。类名、变量名以及方法名都被称为**标识符**. 

关于 Java 标识符，有以下几点需要注意:
* 所有的标识符都应该以字母（A-Z 或者 a-z）,美元符（$）、或者下划线（_）开始
* 首字符之后可以是字母（A-Z 或者 a-z）,美元符（$）、下划线（_）或数字的任何字符组合,不能包含@、#等其他特殊字符
* 关键字和保留关键字不能用作标识符,标识符可以包含关键字
* 标识符是大小写敏感的
* 合法标识符举例：age、$salary、_value、__1_value
* 非法标识符举例：123abc、-salary

<p style="color: #EF4444">阿里巴巴JAVA开发手册规定:</p>
1. 【<span style="color:#EF4444"></span>强制】代码中的命名均不能以下划线或美元符号开始，也不能以下划线或美元符号结束。

   <span style="color:#EF4444">反例:</span>_name / __name / $name / name_ / name$ / name__

2. 【<span style="color:#EF4444">强制</span>】所有编程相关的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。
   说明：正确的英文拼写和语法可以让阅读者易于理解，避免歧义。注意，纯拼音命名方式更要避免采用。

   <span style="color:#34d399">正例:</span>ali / alibaba / taobao / cainiao/ aliyun/ youku / hangzhou 等国际通用的名称，可视同英文。

   <span style="color:#EF4444">反例:</span>DaZhePromotion [打折] / getPingfenByName() [评分] / String fw[福娃] / int 某变量 = 3

3. 【<span style="color:#EF4444">强制</span>】代码和注释中都要避免使用任何语言的种族歧视性词语。

   <span style="color:#34d399">正例:</span>日本人 / 印度人 / blockList / allowList / secondary

   <span style="color:#EF4444">反例:</span>RIBENGUIZI / Asan / blackList / whiteList / slave

4. 【<span style="color:#EF4444">强制</span>】类名使用 UpperCamelCase(大驼峰命名法) 风格，但以下情形例外：DO / BO / DTO / VO / AO /
   PO / UID 等。

   <span style="color:#34d399">正例:</span>ForceCode / UserDO / HtmlDTO / XmlService / TcpUdpDeal / TaPromotion

   <span style="color:#EF4444">反例:</span>forcecode / UserDo / HTMLDto / XMLService / TCPUDPDeal / TAPromotion

5. 【<span style="color:#EF4444">强制</span>】方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase(小驼峰命名法) 风格。

   <span style="color:#34d399">正例:</span> localValue / getHttpMessage() / inputUserId

6. 【<span style="color:#EF4444">强制</span>】常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长。

   <span style="color:#34d399">正例:</span>MAX_STOCK_COUNT / CACHE_EXPIRED_TIME

   <span style="color:#EF4444">反例:</span>MAX_COUNT / EXPIRED_TIME

```java
public class FirstController implements Controller {
    /**
     * ModelAndView 模型和视图
     */
    @Override
    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        List<String> list = Arrays.asList("Hello", "World");
        ModelAndView mv = new ModelAndView();
        //数据
        mv.addObject("list", list);
        // 视图只需要视图页面的名称
        mv.setViewName("list");
        return mv;
    }
}
```

## 关键字
Java语言中有一些具有特殊用途的单词被称为关键字(keyword),当定义标识符时,不要让标识符和关键字相,否则将引起错误
|                            |           |        |       |          |
| -------------------------- | --------- | ------ | ----- | -------- |
| 用于定义数据类型的关键字   |           |        |       |          |
| class                      | interface | byte   | short | int      |
| long                       | float     | double | char  | boolean  |
| void                       |           |        |       |          |
| 用于定义数据类型值的关键字 |           |        |       |          |
| true                       | false     | null   |       |          |
| 用于定义流程控制的关键字   |           |        |       |          |
| if                         | else      | switch | case  | default  |
| while                      | do        | for    | break | continue |
| return                     |           |        |       |          |

| 用于定义访问权限修饰符的关键字               |            |           |              |        |
| -------------------------------------------- | ---------- | --------- | ------------ | ------ |
| private                                      | protected  | public    |              |        |
| 用于定义类，函数，变量修饰符的关键字         |            |           |              |        |
| abstract                                     | final      | static    | synchronized |        |
| 用于定义类与类之间关系的关键字               |            |           |              |        |
| extends                                      | implements |           |              |        |
| 用于定义建立实例及引用实例，判断实例的关键字 |            |           |              |        |
| new                                          | this       | super     | instanceof   |        |
| 用于异常处理的关键字                         |            |           |              |        |
| try                                          | catch      | finally   | throw        | throws |
| 用于包的关键字                               |            |           |              |        |
| package                                      | import     |           |              |        |
| 其他修饰符关键字                             |            |           |              |        |
| native                                       | strictfp   | transient | volatile     | assert |
**保留关键字**

| 保留关键字 |            |
| ---------- |------------|
| const      | 是关键字，但不能使用 |
|goto        | 是关键字，但不能使用 |

## 变量
![](/images/4.jpg)
编程的本质，就是对内存中数据的访问和修改。程序所用的数据 都会保存在内存中，程序员需要一种机制来访问或修改内存中数据。 这种机制就是变量，每个变量都代表了某一小块内存，而且变量是有 名字的，程序对变量赋值，实际上就是把数据装入该变量所代表的内 存区的过程；程序读取变量的值，实际上就是从该变量所代表的内存 区取值的过程。形象地理解：变量相当于一个有名称的容器，该容器
用于装各种不同类型的数据。

JAVA是一门强数据类型的语言,所以在使用变量的时候:
* 变量必须先声明，后使用,同时声明变量的时候,变量也必须初始化才能使用,所谓的初始化就是给变量一个初始的值
* 变量在赋值的时候只能接受声明数据类型相同的数据类型的值
* 在阅读的时候从右向左读,将什么数据类型的值赋值给什么数据类型的变量

### 变量的声明
**声明变量的时候给定初始的值**
```java
 public class VariableDemo {
    public static void main(String[] args) {
        // 变量的声明
        int count = 100;
        String name = "joke";
    }
}
```
**同时声明多个相同数据类型的变量**
```java
 public class VariableDemo {
    public static void main(String[] args) {
        // 变量的声明
        int count = 100;
        String name = "joke";
        //多个数据类型相同的变量
        int age = 19, height = 180, weight = 120;
    }
}
```
**变量在声明完成以后值可以被改变**
```java
public class VariableDemo {
    public static void main(String[] args) {
        // 变量的声明
        int count = 100;
        String name = "joke";
        //多个数据类型相同的变量
        int age = 19, height = 180, weight = 120;
        age = 99;
        System.out.println(age);
    }
}
```
**JDK11以后可以使用var进行变量的声明**
```java
 public class VariableDemo {
    public static void main(String[] args) {
        // 变量 借鉴于js
        var a = "hello";
        System.out.println(a);
        var price = 99.999;
        System.out.println(price);
    }
}
```
**变量在使用的时候一定要先进行初始化,就是给定和声明的数据类型相同的值**
```java
public class VariableDemo {
    public static void main(String[] args) {
        //变量未初始化 Variable 'sum' might not have been initialized
        // int sum;
        int sum = 0;
        System.out.println(sum);
    }
}
```
**字面量的变量**
```java
public class VariableDemo {
    public static void main(String[] args) {
        System.out.println("-----------------进制表示变量--------------");
        //十进制
        int total = 200;
        System.out.println(total);
        // 0b前缀代表的是二进制
        int pages = 0b111;
        System.out.println(pages);
        // 0x前缀代表16进制 0 -9abcdef
        int cum = 0xa1; // 10*16+1
        System.out.println(cum);
        //0代表的是8进制
        int m = 011;
        System.out.println(m);
    }
}
```
## 数据类型
[JDK代码规范文档关于数据类型的定义](https://docs.oracle.com/javase/specs/jls/se17/html/jls-4.html#jls-PrimitiveType)
![](/images/3.jpg)
<blockquote style="color: #333">
 <p style="color: #EF4444">JDK官方代码规范文档说明:</p>
 Java 编程语言是一种静态类型语言，这意味着每个变量和每个表达式都有一个在编译时已知的类型。<br>
 Java编程语言也是一种强类型语言，因为类型限制变量可以保存的值或表达式可以生成的值，限制这些值支持的操作，并确定操作的含义。强静态类型有助于在编译时检测错误
</blockquote>

**JAVA的数据类型分为两大类:**

* **基本数据类型**
  * byte(字节类型): 占8位,取值范围是-2^7~2^7-1,默认值是0
  * short(短整数类型): 占16位,取值范围是-2^15~2^15-1,默认值是0
  * int(整数类型): 占32位,取值范围是-2^31~2^31-1,默认值是0,一般整数变量默认是int类型
  * long(长整数类型): 占64位,取值范围是-2^63~2^63-1
    * 长整数类型添加后缀l/L区分int类型的值,"L"理论上不分大小写，但是若写成"l"容易与数字"1"混淆，不容易分辩。所以最好大写
  * float(单精度浮点类型): 占32位,默认值是0.0F.
    * 单精度浮点类型添加后缀f/F,区分double类型的值,"F"不区分大小写.
  * double(双精度浮点类型): 占64位,默认值是0.0D
    * 双精度浮点类型添加后缀d/D标识为double类型,"D"理论上不分大小写,Java中默认的浮点类型的值就是double类型所以d/D可以省略不写
  * char(字符类型): 字符类型是一个单一的 16 位 Unicode 字符
    * 最小值是 `\u0000`(十进制等效值为 0),最大值是 `\uffff`（即为 65535),字符类型只能存储一个字母或者一个汉字
  * boolean(布尔类型): 只有两个取值：true 和 false,默认值是false
* **引用数据类型**
  * 类类型
  * 接口类型
  * 数组类型
  * 类型变量(T)
  * null
![](/images/6.webp)
![](/images/39.png)
```java
public class DateTypeDemo {
    public static void main(String[] args) {
        // 字符类型 最大取值是127
        byte by = 127;
        System.out.println(by);
        
        // 短整数类型
        short sh = 1234;
        System.out.println(sh);
        
        // 整数类型
        int count = 1234567;
        System.out.println(count);
        
        //长整数类型
        long total = 99887766554433L;
        System.out.println(total);
    
        // 单精度浮点类型
        float price = 9.99F;
        System.out.println(price);

        // double totalPrice = 99.9999999999D;
        // 浮点默认就是double后缀可以省略不写
        double totalPrice = 99.9999999999;
        System.out.println(totalPrice);
        
        // 结果是单精度浮点类型 0.33333334
        System.out.println(1.0F / 3.0F);
        //结果是双精度浮点类型0.3333333333333333
        System.out.println(1.0 / 3.0);

        // 布尔类型
        boolean result = true;
        System.out.println(result);
        
        // 字符类型存储字母字符
        char ch = 'a';
        System.out.println(ch);
        
        // 字符类型存储汉字字符
        char chOne = '你';
        System.out.println(chOne);
    }
}
```
<fieldset style="border-left:none;border-right:none;border-bottom: none  ">
 <legend style="text-align: center;font-weight: 700">常见面试题:一个字符有几个字节?</legend>
</fieldset>
JAVA默认使用Unicode进行编码,根据使用的编码不同,一个字符代表的字节数不同

**unicode编码**
```java
public class CharDemo {
    public static void main(String[] args) throws UnsupportedEncodingException {
        String str = "你";
        System.out.println(Arrays.toString(str.getBytes("unicode")));
    }
}
```
```properties
# unicode 编码四个字节,-2 -1永远是 固定的,所以是两个字节(如果带表示位则是四个字节)
[-2, -1, 79, 96]
```
**UTF8(万国表)**
```java
public class CharDemo {
    public static void main(String[] args) throws UnsupportedEncodingException {
        String str = "你";
        System.out.println(Arrays.toString(str.getBytes("UTF8")));
    }
}
```
```properties
# utf8编码表 一个字符是三个字节
[-28, -67, -96]
```
**GBK/gb2312(汉字码表)**
```java
public class CharDemo {
    public static void main(String[] args) throws UnsupportedEncodingException {
        String str = "你";
        System.out.println(Arrays.toString(str.getBytes("GBK")));
    }
}

```
```properties
# GBK/gb2312一个字符是两个字节
[-60, -29]
```
**ISO8859-1(西欧码表)**
```java
public class CharDemo {
    public static void main(String[] args) throws UnsupportedEncodingException {
        String str = "你";
        System.out.println(Arrays.toString(str.getBytes("iso8859-1")));
    }
}
```
```properties
# iso8859-1 西欧码表一个字符是一个字节
[63]
```
### 使用下划线对长的数值进行分割
当程序中用到的数值位数特别多时，程 序员眼睛“看花”了都看不清到底有多少位数。为了解决这种问题，
Java 7引入了一个新功能：程序员可以在数值中使用下画线，不管是 整型数值，还是浮点型数值，都可以自由地使用下画线。通过使用下 画线分隔，可以更直观地分辨数值中到底包含多少位
```java
public class DataDemo {
    public static void main(String[] args) throws UnsupportedEncodingException {
        int num = 0b00_1001_001_100;
        System.out.println(num);
        double price = 999_999.33_33_333_444;
        System.out.println(price);
    }
}
```
```properties
588
999999.3333333444
```
### 基本数据类型的类型转换
在Java程序中，不同的基本类型的值经常需要进行相互转换。Java语言所提供的7种数值类型之间可以相互转换，有两种类型转换方式:自动类型转换和强制类型转换
+ 不能对boolean类型进行类型转换
+ 不能将对象类型转换为不相关的类的对象
+ char 类型不能转为byte和short类型

#### 自动数据类型转换
Java所有的数值型变量可以相互转换，如果系统支持把某种基本类型的值直接赋给另一种基本类型的变量,则这种方式被称为自动类型转换。
当把一个表数范围小的数值或变量直接赋给另一个表数范围大的变量时,系统将可以进行自动类型转换,否则就需要强制转换
![](/images/javaConversion.png)
![](/images/40.png)
```java
public class DataTypeCastDemo {
    public static void main(String[] args) {
        byte by = 123;
        int num = 100;
        // 变量的值可以更改 默认转换
        num = by;
        System.out.println(num);

        char name = '张';
        // 24352
        System.out.println(name + 0);
    }
}
```
#### 强制数据类型转换
```java
public class DataTypeCastDemo {
    public static void main(String[] args) {
        char name = '张';
        // 24352
        System.out.println(name + 0);
        // 强制转换
        by = (byte) num;
        System.out.println(by);
        //精度丢失
        by = (byte) 12345678;
        System.out.println(by);
        //类类型的强制转换
        Object obj = new Object();
        String str = (String) obj;
        System.out.println(str);
    }
}
```
#### 表达式类型的自动提升
当一个算术表达式中包含多个基本类型的值时,整个算术表达式的数据类型将发生自动提升。

Java定义了如下的自动提升规则。

➢ 所有的byte类型、short类型和char类型将被提升到int类型。

➢ 整个算术表达式的数据类型自动提升到与表达式中最高等级操作数同样的类型。操作数的等级排列如图所示，位于箭头右边类型的等级高于位于箭头左边类型的等级。

![](/images/41.png)

## 运算符
![](/images/1.jpg)
### 算数运算符
表格中的实例假设整数变量A的值为10，变量B的值为20:

| 操作符 | 描述                              | 例子                               |
| :----- | :-------------------------------- | :--------------------------------- |
| +      | 加法 - 相加运算符两侧的值         | A + B 等于 30                      |
| -      | 减法 - 左操作数减去右操作数       | A – B 等于 -10                     |
| *      | 乘法 - 相乘操作符两侧的值         | A * B等于200                       |
| /      | 除法 - 左操作数除以右操作数       | B / A等于2                         |
| ％     | 取余 - 左操作数除以右操作数的余数 | B%A等于0                           |
| ++     | 自增: 操作数的值增加1             | B++ 或 ++B 等于 21（区别详见下文） |
| --     | 自减: 操作数的值减少1             | B-- 或 --B 等于 19（区别详见下文） |
```java
public class Test {
 
  public static void main(String[] args) {
     int a = 10;
     int b = 20;
     int c = 25;
     int d = 25;
     // + 求和和字符串拼接
     System.out.println("a + b = " + (a + b) );
     System.out.println("a - b = " + (a - b) );
     // 字符串拼接 任何数据类型的值额字符串拼接后的结果都是字符串的值
     System.out.println("Hello" + " World");
     System.out.println("a * b = " + (a * b) );
     System.out.println("b / a = " + (b / a) );
     // 小的数取模于打的数 结果仍是小的数
     System.out.println("b % a = " + (b % a) );
     System.out.println("c % a = " + (c % a) );
     System.out.println("a++   = " +  (a++) );
     System.out.println("a--   = " +  (a--) );
     // 查看  d++ 与 ++d 的不同
     System.out.println("d++   = " +  (d++) );
     System.out.println("++d   = " +  (++d) );
  }
}
```
```java
public class selfAddMinus{
    public static void main(String[] args){
        int a = 3;//定义一个变量；
        int b = ++a;//自增运算
        int c = 3;
        int d = --c;//自减运算
        System.out.println("进行自增运算后的值等于"+b);
        System.out.println("进行自减运算后的值等于"+d);
    }
}
```
```properties
进行自增运算后的值等于4
进行自减运算后的值等于2
```
解析代码执行过程为:

* int b = ++a; 拆分运算过程为: a=a+1=4; b=a=4, 最后结果为b=4,a=4

* int d = --c; 拆分运算过程为: c=c-1=2; d=c=2, 最后结果为d=2,c=2

### 赋值运算符
| 操作符  | 描述                                                         | 例子                                     |
| :------ | :----------------------------------------------------------- | :--------------------------------------- |
| =       | 简单的赋值运算符，将右操作数的值赋给左侧操作数               | C = A + B将把A + B得到的值赋给C          |
| + =     | 加和赋值操作符，它把左操作数和右操作数相加赋值给左操作数     | C + = A等价于C = C + A                   |
| - =     | 减和赋值操作符，它把左操作数和右操作数相减赋值给左操作数     | C - = A等价于C = C - A                   |
| * =     | 乘和赋值操作符，它把左操作数和右操作数相乘赋值给左操作数     | C * = A等价于C = C * A                   |
| / =     | 除和赋值操作符，它把左操作数和右操作数相除赋值给左操作数     | C / = A，C 与 A 同类型时等价于 C = C / A |
| （％）= | 取模和赋值操作符，它把左操作数和右操作数取模后赋值给左操作数 | C％= A等价于C = C％A                     |
| << =    | 左移位赋值运算符                                             | C << = 2等价于C = C << 2                 |
| >> =    | 右移位赋值运算符                                             | C >> = 2等价于C = C >> 2                 |
| ＆=     | 按位与赋值运算符                                             | C＆= 2等价于C = C＆2                     |
| ^ =     | 按位异或赋值操作符                                           | C ^ = 2等价于C = C ^ 2                   |
| \| =    | 按位或赋值操作符                                             | C \| = 2等价于C = C \| 2                 |
```java
public class Test {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int c = 0;
        c = a + b;
        System.out.println("c = a + b = " + c );
        c += a ;
        System.out.println("c += a  = " + c );
        c -= a ;
        System.out.println("c -= a = " + c );
        c *= a ;
        System.out.println("c *= a = " + c );
        a = 10;
        c = 15;
        c /= a ;
        System.out.println("c /= a = " + c );
        a = 10;
        c = 15;
        c %= a ;
        System.out.println("c %= a  = " + c );
        c <<= 2 ;
        System.out.println("c <<= 2 = " + c );
        c >>= 2 ;
        System.out.println("c >>= 2 = " + c );
        c >>= 2 ;
        System.out.println("c >>= 2 = " + c );
        c &= a ;
        System.out.println("c &= a  = " + c );
        c ^= a ;
        System.out.println("c ^= a   = " + c );
        c |= a ;
        System.out.println("c |= a   = " + c );
    }
}
```
**面试题:**
```java
public class OperatorsDemoTwo {
    public static void main(String[] args) {
        int num1 = 234;
        // 第一种为什么需要强制转换
        num1 = (int) (num1 + 12.33F);
        System.out.println(num);
        // 执行不需要强制转换呢?
        num1 += 12.33F;
        System.out.println(num1);
    }
}
```
解析程序运行:
* num1+= 12.33F;在运行的时候会自动将右侧运算后的结果值先强制转换为int类型,在赋值给int,所以不会报错,编译通过
### 关系运算符
表格中的实例整数变量A的值为10，变量B的值为20:

| 运算符 | 描述                                                         | 例子             |
| :----- | :----------------------------------------------------------- | :--------------- |
| ==     | 检查如果两个操作数的值是否相等，如果相等则条件为真。         | （A == B）为假。 |
| !=     | 检查如果两个操作数的值是否相等，如果值不相等则条件为真。     | (A != B) 为真。  |
| >      | 检查左操作数的值是否大于右操作数的值，如果是那么条件为真。   | （A> B）为假。   |
| <      | 检查左操作数的值是否小于右操作数的值，如果是那么条件为真。   | （A <B）为真。   |
| >=     | 检查左操作数的值是否大于或等于右操作数的值，如果是那么条件为真。 | （A> = B）为假。 |
| <=     | 检查左操作数的值是否小于或等于右操作数的值，如果是那么条件为真。 | （A <= B）为真。 |
```java
public class Test {
 
  public static void main(String[] args) {
     int a = 10;
     int b = 20;
     System.out.println("a == b = " + (a == b) );
     System.out.println("a != b = " + (a != b) );
     System.out.println("a > b = " + (a > b) );
     System.out.println("a < b = " + (a < b) );
     System.out.println("b >= a = " + (b >= a) );
     System.out.println("b <= a = " + (b <= a) );
  }
}
```
### 逻辑运算符
下表列出了逻辑运算符的基本运算，假设布尔变量A为真，变量B为假

| 操作符 | 描述                                                         | 例子                |
| :----- | :----------------------------------------------------------- | :------------------ |
| &&     | 称为逻辑与运算符。当且仅当两个操作数都为真，条件才为真。     | （A && B）为假。    |
| \| \|  | 称为逻辑或操作符。如果任何两个操作数任何一个为真，条件为真。 | （A \| \| B）为真。 |
| ！     | 称为逻辑非运算符。用来反转操作数的逻辑状态。如果条件为true，则逻辑非运算符将得到false。 | ！（A && B）为真。  |
```java
public class Test {
  public static void main(String[] args) {
     boolean a = true;
     boolean b = false;
     System.out.println("a && b = " + (a&&b));
     System.out.println("a || b = " + (a||b) );
     System.out.println("!(a && b) = " + !(a && b));
  }
}
```
**&&和|| 都具有短路功能,&&左侧为false，=,右侧不参与运算,&&左侧为true,右侧不参与运算**
### 位运算符
下表列出了位运算符的基本运算，假设整数变量 A 的值为 60 和变量 B 的值为 13:

| 操作符 | 描述                                                         | 例子                           |
| :----- | :----------------------------------------------------------- | :----------------------------- |
| ＆     | 如果相对应位都是1，则结果为1，否则为0                        | （A＆B），得到12，即0000 1100  |
| \|     | 如果相对应位都是 0，则结果为 0，否则为 1                     | （A \| B）得到61，即 0011 1101 |
| ^      | 如果相对应位值相同，则结果为0，否则为1                       | （A ^ B）得到49，即 0011 0001  |
| 〜     | 按位取反运算符翻转操作数的每一位，即0变成1，1变成0。         | （〜A）得到-61，即1100 0011    |
| <<     | 按位左移运算符。左操作数按位左移右操作数指定的位数。         | A << 2得到240，即 1111 0000    |
| >>     | 按位右移运算符。左操作数按位右移右操作数指定的位数。         | A >> 2得到15即 1111            |
| >>>    | 按位右移补零操作符。左操作数的值按右操作数指定的位数右移，移动得到的空位以零填充。 | A>>>2得到15即0000 1111         |
```java
public class Test {
  public static void main(String[] args) {
     int a = 60; /* 60 = 0011 1100 */ 
     int b = 13; /* 13 = 0000 1101 */
     int c = 0;
     c = a & b;       /* 12 = 0000 1100 */
     System.out.println("a & b = " + c );
 
     c = a | b;       /* 61 = 0011 1101 */
     System.out.println("a | b = " + c );
 
     c = a ^ b;       /* 49 = 0011 0001 */
     System.out.println("a ^ b = " + c );
 
     c = ~a;          /*-61 = 1100 0011 */
     System.out.println("~a = " + c );
 
     c = a << 2;     /* 240 = 1111 0000 */
     System.out.println("a << 2 = " + c );
 
     c = a >> 2;     /* 15 = 1111 */
     System.out.println("a >> 2  = " + c );
  
     c = a >>> 2;     /* 15 = 0000 1111 */
     System.out.println("a >>> 2 = " + c );
  }
} 
```
### 三元运算符(三目运算符/条件运算符)
```java
public class Test {
   public static void main(String[] args){
      int a , b;
      a = 10;
      // 如果 a 等于 1 成立，则设置 b 为 20，否则为 30
      b = (a == 1) ? 20 : 30;
      System.out.println( "Value of b is : " +  b );
 
      // 如果 a 等于 10 成立，则设置 b 为 20，否则为 30
      b = (a == 10) ? 20 : 30;
      System.out.println( "Value of b is : " + b );
   }
}
```
## 运算符的优先级
所有的数学运算都认为是从左向右运算的,Java语言中大部分运算符也是从左向右结合的,只有单目运算符、赋值运算符和三目运算符例外,其中,单目运算符、赋值运算符和三目运算符是从右向左结
合的,也就是从右向左运算.乘法和加法是两个可结合的运算，也就是说，这两个运算符左右两边的操作数可以互换位置而不会影响结果。运算符有不同的优先级,所谓优先级就是在表达式运算中的运算顺序
| 类别     | 操作符                                     | 关联性   |
| :------- | :----------------------------------------- | :------- |
| 后缀     | () [] . (点操作符)                         | 左到右   |
| 一元     | expr++ expr--                              | 从左到右 |
| 一元     | ++expr --expr + - ～ ！                    | 从右到左 |
| 乘性     | * /％                                      | 左到右   |
| 加性     | + -                                        | 左到右   |
| 移位     | >> >>>  <<                                 | 左到右   |
| 关系     | > >= < <=                                  | 左到右   |
| 相等     | == !=                                      | 左到右   |
| 按位与   | ＆                                         | 左到右   |
| 按位异或 | ^                                          | 左到右   |
| 按位或   | \|                                         | 左到右   |
| 逻辑与   | &&                                         | 左到右   |
| 逻辑或   | \| \|                                      | 左到右   |
| 条件     | ？：                                       | 从右到左 |
| 赋值     | = + = - = * = / =％= >> = << =＆= ^ = \| = | 从右到左 |
| 逗号     | ，                                         | 左到右   |
## 流程控制语句
### 顺序结构
任何编程语言中最常见的程序结构就是顺序结构。顺序结构就是程序从上到下逐行地执行，中间没有任何判断和跳转,当然了这是一种理想的状态,在实际的项目与开发中从来就没有"一蹴而就"的程序。
### 分支语句
顺序的执行流程是理想化的,实际开发的时候我们根据业务去整理出流程管理图,例如下边的登录注册流程图:
![](/images/42.png)

JAVA的流程控制分为两大类:if流程语句和switch流程语句
#### if流程控制语句
if流程控制语句使用布尔表达式或者布尔值进行条件控制,当if()的值为true时在执行{}中的语句,if流控控制语句囊括为三种使用情况:

**1. if(逻辑表达式){}**
```java
public class Test {
 
   public static void main(String args[]){
      int x = 10;
 
      if( x < 20 ){
         System.out.print("这是 if 语句");
      }
   }
}
```
**2. if(逻辑表达式){}else{}**
if的逻辑表达式的值是true的时候执行if{}的语句,为false的时候执行else{}的语句。
```java
public class Test {
 
   public static void main(String args[]){
      int x = 30;
 
      if( x < 20 ){
         System.out.print("这是 if 语句");
      }else{
         System.out.print("这是 else 语句");
      }
   }
}
```
**3. if(逻辑表达式){}else if(逻辑表达式){}**

if 语句后面可以跟 else if…else 语句，这种语句可以检测到多种可能的情况。
使用 if，else if，else 语句的时候，需要注意下面几点：
+ if 语句至多有 1 个 else 语句，else 语句在所有的 else if 语句之后。
+ if 语句可以有若干个 else if 语句，它们必须在 else 语句之前。
+ 一旦其中一个 else if 语句检测为 true，其他的 else if 以及 else 语句都将跳过执行。
```java
public class Test {
   public static void main(String args[]){
      int x = 30;
 
      if( x == 10 ){
         System.out.print("Value of X is 10");
      }else if( x == 20 ){
         System.out.print("Value of X is 20");
      }else if( x == 30 ){
         System.out.print("Value of X is 30");
      }else{
         System.out.print("这是 else 语句");
      }
   }
}
```
**<span style="color:#EF4444">阿里巴巴java开发手册规定:</span>如果非使用if()...else if()...else...方式表达逻辑,避免后续代码维护困难,请勿超过3层**.

**<span style="color:#10B981">超过 3 层的 if-else 的逻辑判断代码可以使用卫语句、策略模式、状态模式等来实现</span>**
```java
public void findBoyfriend (Man man) {
 if (man.isUgly()) {
 System.out.println("本姑娘是外貌协会的资深会员");
 return;
 }
 if (man.isPoor()) {
 System.out.println("贫贱夫妻百事哀");
 return;
 }
 if (man.isBadTemper()) {
 System.out.println("银河有多远，你就给我滚多远");
 return; }
 System.out.println("可以先交往一段时间看看");
}
```
**如果分支语句的代码体只有一行执行语句可以省略大括号:**
```java
public class Test {
 
   public static void main(String args[]){
      int x = 30;
      // 如果执行代码只有一句话,可以省略大括号
      if( x < 20 )
         System.out.print("这是 if 语句");
      else
         System.out.print("这是 else 语句");
   }
}
```
**<span style="color:#EF4444">阿里巴巴java开发手册规定</span>:在 if/else/for/while/do 语句中必须使用大括号**
#### switch流程控制语句
switch case 语句判断一个变量与一系列值中某个值是否相等，每个值称为一个分支
switch case 语句有如下规则:
* switch 语句中的变量类型可以是: byte、short、int 或者 char。从 Java SE 7 开始,switch 支持字符串 String 类型了,同时 case 标签必须为字符串常量或字面量。
* switch 语句可以拥有多个 case 语句。每个 case 后面跟一个要比较的值和冒号。
* case 语句中的值的数据类型必须与变量的数据类型相同，而且只能是常量或者字面常量。
* 当变量的值与 case 语句的值相等时，那么 case 语句之后的语句开始执行，直到 break 语句出现才会跳出 switch 语句。
* 当遇到 break 语句时，switch 语句终止。程序跳转到 switch 语句后面的语句执行。case 语句不必须要包含 break 语句。如果没有 break 语句出现，程序会继续执行下一条 case 语句，直到出现 break 语句。
* switch 语句可以包含一个 default 分支,该分支一般是 switch 语句的最后一个分支（可以在任何位置，但建议在最后一个）。default 在没有 case 语句的值和变量值相等的时候执行。default 分支不需要 break 语句。
* switch case 执行时，一定会先进行匹配,匹配成功返回当前 case 的值,再根据是否有 break,判断是否继续输出,或是跳出判断

**switch语法格式:**
```java
switch(expression){
    case value :
       //语句
       break; //可选
    case value :
       //语句
       break; //可选
    //你可以有任意数量的case语句
    default : //可选
       //语句
}
```
```java
public class Test {
   public static void main(String args[]){
      //char grade = args[0].charAt(0);
      char grade = 'C';
 
      switch(grade)
      {
         case 'A' :
            System.out.println("优秀"); 
            break;
         case 'B' :
         case 'C' :
            System.out.println("良好");
            break;
         case 'D' :
            System.out.println("及格");
            break;
         case 'F' :
            System.out.println("你需要再努力努力");
            break;
         default :
            System.out.println("未知等级");
      }
      System.out.println("你的等级是 " + grade);
   }
}
```
**如果省略了break;会触发case穿透,匹配的后边的所有语句都会执行.**
```java
public class ControllerThreeDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String num = scanner.nextLine();
        // case穿透
        switch (num) {
            case "hello":
                System.out.println("hello");
            case "world":
                System.out.println("world");
            case "one":
                System.out.println("one");
            case "two":
                System.out.println("two");
        }
    }
}
```
### 循环语句
![](/images/2.jpg)
循环语句可以在满足循环条件的情况下,反复执行某一段代码,这段被重复执行的代码被称为循环体。当反复执行这个循环体时,需要在合适的时候把循环条件改为假,从而结束循环,否则循环将一直
执行下去,形成死循环
#### while循环
while(布尔值){} 当布尔值是true的时候就是一个死循环,代码会一致重复的执行,一直到jvm分配的内存使用完就会抛出StackOverFlow异常
```java
public class WhileDemo {
    public static void main(String[] args) {
        // 死循环
        while (true) {
            System.out.println("Hello World");
        }
    }
}
```
**终止死循环**

while循环的逻辑表达式值是true的时候就是死循环,可以通过控制条件和break关键字终止循序.
```java
public class WhileDemo {
    public static void main(String[] args) {
        //终止死循环
        int i = 0;
        while (true) {
            System.out.println("Hello World: " + i);
            if (i == 10) {
                break;
            }
            i++;
        }
        int num = 0;
        while (num < 10) {
            System.out.println("Hello World: " + num);
            num++;
        }
    }
}
```
#### do while循环
对于 while 语句而言,如果不满足条件,则不能进入循环。但有时候我们需要即使不满足条件,也至少执行一次。
do…while 循环和 while 循环相似，不同的是,do…while 循环至少会执行一次。
```java
public class DoWhileDemo {
    public static void main(String[] args) {
        do {
            System.out.println("Hello World");
        } while (false);
    }
}
```
#### for循环
虽然所有循环结构都可以用 while 或者 do...while表示,但Java 提供了另一种语句 —— for 循环,使一些循环结构变得更加简单。for循环执行的次数是在执行前就确定的
```java
for(initialization;condition;incr/decr){  
    //code to be executed  
}
```
关于 for 循环有以下几点说明:

* 最先执行初始化步骤。可以声明一种类型，但可初始化一个或多个循环控制变量，也可以是空语句。
* 然后，检测布尔表达式的值。如果为 true，循环体被执行。如果为false，循环终止，开始执行循环体后面的语句。
* 执行一次循环后，更新循环控制变量。
* 再次检测布尔表达式。循环执行上面的过程
```java
public class ForDemo {
    public static void main(String[] args) {
        //初始的变量值和条件计算出循环的次数
        for (int i = 0; i <= 10; i++) {
            System.out.println("Hello World: " + i);
        }
    }
}
```
**for循环中,前++和后++对程序的执行没有任何影响:**

```java
public class ForDemo {
    public static void main(String[] args) {
        //初始的变量值和条件计算出循环的次数
        for (int i = 0; i <= 10; ++i) {
            System.out.println("Hello World: " + i);
        }
    }
}
```
**for循环的三个条件省略会出现死循环:**
```java
public class ForDemoTwo {
    public static void main(String[] args) {
        // 死循环
       /* for (int i = 0; i < 10; ) {
            System.out.println("Hello World:" + i);
        }*/
        //死循环
      /*  for (int i = 0; ; i++) {
            System.out.println("Hello World:" + i);
        }*/
        // 死循环
        for (; ; ) {
            System.out.println("Hello World:");
        }
    }
}
```
##### 增强for循环:

Java5 引入了一种主要用于数组的增强型 for 循环。
```java
public class ForDemoThree {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        // 增强for循环
        // 遍历集合 数组 枚举
        // for(数组/集合元素的数据类型  下标对应的值: 数组/集合)
        for (int i : arr) {
            System.out.println(i);
        }
    }
}
```
##### 嵌套for循环
```java
public class ForDemoFour {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                // 打印不换行
                System.out.print(" * ");
            }
            //换行
            System.out.println();
        }
    }
}

public class ForDemoFour {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                // 打印不换行
                System.out.print(" * ");
            }
            //换行
            System.out.println();
        }
        // 九九乘法表
        for (int i = 1; i < 10; i++) {
            for (int j = 1; j < 10; j++) {
                // 打印不换行
                System.out.print(j + "*" + i + "=" + j * i + " ");
            }
            //换行
            System.out.println();
        }

        // 九九乘法表 优化
        for (int i = 1; i < 10; i++) {
            for (int j = 1; j <= i; j++) {
                // 打印不换行
                System.out.print(j + "*" + i + "=" + j * i + " ");
            }
            //换行
            System.out.println();
        }
    }
}
```
#####  break关键字
break 主要用在循环语句或者 switch 语句中,用来跳出整个语句块。break 跳出最里层的循环,并且继续执行该循环下面的语句
```java
public class Test {
   public static void main(String[] args) {
      int [] numbers = {10, 20, 30, 40, 50};
 
      for(int x : numbers ) {
         // x 等于 30 时跳出循环
         if( x == 30 ) {
            break;
         }
         System.out.print( x );
         System.out.print("\n");
      }
   }
}
```
**break和标签(break作为c语言中的goto使用)**

break后的标签必须是一个有效的标签,即这个标签必须在break语句所在的循环之前定义,或者在其所在循环的外层循环之前定义

```java
public class ContinueDemo {
    public static void main(String[] args) {
        // outer标记和循环的代码之间不能书写任何代码
        outer:
        for (int i = 0; i < 10; i++) {
            inner:
            for (int j = 0; j < 10; j++) {
                if (j == 8) {
                    break inner;
                }

                if (i == 9) {
                    break outer;
                }
                System.out.print(" Hello World: " + i + "----" + j);
            }
            System.out.println();
        }
    }
}
```
##### continue关键字
continue 适用于任何循环控制结构中。作用是让程序立刻跳转到下一次循环的迭代。在 for 循环中，continue 语句使程序立即跳转到更新语句。 在 while 或者 do…while 循环中，程序立即跳转到布尔表达式的判断语句。
```java
public class Test {
   public static void main(String[] args) {
      int [] numbers = {10, 20, 30, 40, 50};
 
      for(int x : numbers ) {
         if( x == 30 ) {
        continue;
         }
         System.out.print( x );
         System.out.print("\n");
      }
   }
}
```
##### return结束方法执行
return关键字并不是专门用于结束循环的,return的功能是结束 一个方法。当一个方法执行到一个return语句时(return关键字后还可以跟变量、常量和表达式，这将在方法介绍中有更详细的解释),这个方法将被结束
```java
public class ReturnTest{
    public static void main(String[] args){
        for(var i=0;i<=5;i++){
            if(i==3){
             return;
            }
            System.out.println("return后的输出语句");
        }
    }
}
```
## 数组
数组是编程语言中最常见的一种数据结构,可用于存储多个数据,每个数组元素存放一个数据,通常可通过数组元素的索引来访问数组元素,包括为数组元素赋值和取出数组元素的值

Java 中的数组是一组由公用名引用的类似类型的变量。Array 是具有连续内存位置的类似类型元素的集合。

![](/images/5.jpg)
### 一维数组的声明
1. 静态声明 我们在声明数组的时候 给定数组的元素的值,由系统去计算数组的长度

   数据类型  [] 变量名称 = new 数据类型[]{值,值,值,值};

2. 动态声明 声明数组的时候给定数组的长度 由系统根据数组的数据类型,添加数组元素的默认值

   数据类型  [] 变量名称 = new 数据类型[数组的长度];

3. 使用c语言的声明数组的方法,在java中也是成立的

   数据类型   变量名称 [] = new 数据类型[数组的长度];

```java
public class ArrayDemoOne {
    public static void main(String[] args) {
        //声明一个数组 动态声明的一个数组
        int[] arr = new int[5];
        // [I@5594a1b5
        System.out.println(arr);

        //静态声明的数组
        int[] arr1 = new int[]{1, 2, 3, 4, 5, 6};
        // [I@6a5fc7f7
        System.out.println(arr1);
    }
}
```
### 数组的下标(index)
我们数组就是在运行的内存中开辟一个连续的空间,动态声明就是指定了空间的长度,静态声明的时候就指定了数组元素和值,那么我们要从数组去获取值或者给数组的填充值,要通过数组的下标(index)去赋值或者获取值,下标是从0开始

length数组的属性.
```java
public class ArrayDemoOne {
    public static void main(String[] args) {
        //声明一个数组 动态声明的一个数组
        int[] arr = new int[5];
        // [I@5594a1b5
        System.out.println(arr);
        // 获取数组的元素值
        System.out.println(arr[0]);
        System.out.println(arr[1]);
        System.out.println(arr[2]);
        //数组的元素赋值
        arr[0] = 123;
        arr[1] = 234;
        arr[2] = 345;
        arr[3] = 678;
        arr[4] = 789;
        // 数组下标越界异常
        // java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
        // arr[5] = 8910;
        System.out.println(arr[0]);
        System.out.println(arr[1]);
        System.out.println(arr[2]);
        System.out.println(arr[3]);
        // 数组的长度属性
        System.out.println("数组的长度:" + arr.length);
        //静态声明的数组
        int[] arr1 = new int[]{1, 2, 3, 4, 5, 6};
        // [I@6a5fc7f7
        System.out.println(arr1);
        System.out.println(arr1[0]);
        System.out.println(arr1[1]);
        System.out.println(arr1[2]);

        // 严禁同时使用静态和动态去声明一个数组
        // int [] arr2 = new int[5]{1,2,3,4,5};
    }
}
```
![](/images/6.jpg)

### new 关键字(实例化对象)
JVM 将内存分为两部分：堆栈内存和堆内存,堆栈内存和堆内存之间的主要区别在于，堆栈用于存储方法执行顺序和局部变量，而堆内存存储对象并使用动态内存分配和释放
![](/images/45.png)
```java
public class ArrayDemoOne {
    public static void main(String[] args) {
        //声明一个数组 动态声明的一个数组
        int[] arr = new int[5];
        // [I@5594a1b5
        System.out.println(arr);
    }
}
```
![](/images/46.png)

程序在运行的时候,首先运行main方法,为main方法开辟内存空间,在main方法内存中开辟stack空间,存储变量,使用了new关键字就在堆内存(heap)开辟空间,存储对象,
JVM会根据哈希算法计算出对象在堆内存的地址值,stack内存的变量引用堆空间的对象的地址值去使用。

### 不同数据类型的数组默认值不相同
+ byte short int long 默认值是0
+ float double 默认值是0.0
+ char 默认是值\u0000
+ boolean默认值是false
```java
public class ArrayDemoTwo {
    public static void main(String[] args) {
        byte[] by = new byte[5];
        System.out.println(by[0]);

        int[] arr = new int[5];
        System.out.println(arr[0]);

        float[] arr2 = new float[5];
        System.out.println(arr2[0]);

        String[] arr3 = new String[5];
        System.out.println(arr3[0]);
        // unicode编码 \u0000
        char[] ch = new char[5];
        System.out.println(ch[0]);
    }
}
```
```properties
0
0
0.0
null
 
false
```
### 数组的简写形式
数组的简写形式等同于 数组的静态声明的数组
```java
public class ArrayDemoThree {
    public static void main(String[] args) {
        //数组的简写形式等同于 数组的静态声明的数组
        int[] arr = {2, 3, 4, 5, 6, 78};
        // [I@5594a1b5
        System.out.println(arr);
        System.out.println(arr[0]);
        System.out.println(arr[1]);
    }
}
```
### 数组的遍历
1. while循环遍历数组
```java
public class ArrayDemoFour {
    public static void main(String[] args) {
        int[] arr = {22, 34, 56, 78, 888, 99};
        //通过下标获取
        System.out.println(arr[1]);
        int index = 0;
        while (index < arr.length) {
            System.out.println("数组的元素是:" + "index=" + arr[index]);
            index++;
        }
    }
}
```
2. for循环遍历数组
```java
public class ArrayDemoFour {
    public static void main(String[] args) {
        int[] arr = {22, 34, 56, 78, 888, 99};
        //通过下标获取
        System.out.println(arr[1]);
        int index = 0;
        //通过for循环遍历数组
        for (int i = 0; i < arr.length; i++) {
            System.out.println("数组的元素是:" + "i=" + arr[i]);
        }
    }
}
```
3. 增强for(foreach循环)循环遍历数组

使用增强for遍历数组时,int j:arr,j代表的是数组的每一个下标的值
```java
public class ArrayDemoFour {
    public static void main(String[] args) {
        int[] arr = {22, 34, 56, 78, 888, 99};
        //通过下标获取
        System.out.println(arr[1]);
        int index = 0;
        for (int j : arr) {
            System.out.println("数组的元素是:" + "j=" + j);
        }
    }
}
```
### 数组的求最值
```java
public class ArrayDemoFive {
    public static void main(String[] args) {
        int[] arr = {2, 23, 45, 6, 87, 12, 46};
        int max = arr[0];
        //求数组的最大值
        for (int i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        System.out.println("数组的最大值是:" + max);
    }
}
```
### 数组的工具类Arrays
Java提供的Arrays类里包含的一些static修饰的方法可以直接操作数组,具有以下功能：
+ 给数组赋值：通过 fill 方法。
+ 对数组排序：通过 sort 方法,按升序。
+ 比较数组：通过 equals 方法比较数组中元素值是否相等。
+ 查找数组元素：通过 binarySearch 方法能对排序好的数组进行二分查找法操作。
```java
public class ArraysTest {
    public static void main(String[] args) {
        // 定义一个a数组
        int[] a = new int[] { 3, 4, 5, 6 };
        // 定义一个a2数组
        int[] a2 = new int[] { 3, 4, 5, 6 };
        // a数组和a2数组的长度相等，毎个元素依次相等，将输出true
        System.out.println("a数组和a2数组是否相等：" + Arrays.equals(a, a2));
        // 通过复制a数组，生成一个新的b数组
        int[] b = Arrays.copyOf(a, 6);
        System.out.println("a数组和b数组是否相等：" + Arrays.equals(a, b));
        // 输出b数组的元素，将输出[3, 4, 5, 6, 0, 0]
        System.out.println("b 数组的元素为：" + Arrays.toString(b));
        // 将b数组的第3个元素（包括）到第5个元素（不包括）賦值为1
        Arrays.fill(b, 2, 4, 1);
        // 输出b数组的元素，将输出[3, 4, 1, 1, 0, 0]
        System.out.println("b 数组的元素为：" + Arrays.toString(b));
        // 对b数组进行排序
        Arrays.sort(b);
        // 输出b数组的元素.将输出[0,0,1,1,3,4]
        System.out.println("b数组的元素为：" + Arrays.toString(b));
    }
}
```
## 数组的排序
![](/images/1.jfif)

+ 稳定：如果一个原本在b前面，而A = B，排序之后一个仍然在b的前面。
+ 不稳定：如果a原本在b的前面，而a = b，排序之后a可能会出现在b的后面。
+ 时间复杂度：对排序数据的总的操作次数反映当Ñ变化时，操作次数呈现什么规律。
+ 空间复杂度：是指算法在计算机内执行时所需存储空间的度量，它也是数据规模Ñ的函数
### 冒泡排序(Bubble Sort)
冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端

算法描述:
+ 比较相邻的元素如果第一个比第二个大，就交换它们两个。
+ 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数;
+ 针对所有的元素重复以上的步骤，除了最后一个;
+ 重复步骤1〜3，直到排序完成

![](/images/冒泡排序.gif)
```java
public class BubbleArraySortDemo {
    public static void main(String[] args) {
        // 冒泡排序
        int[] arr = {12, 34, 8, 78, 56, 43, 99, 18, 24};
      /*  //冒泡的次数
        for (int i = 0; i < arr.length; i++) {
            //数组元素之间两两比较
            for (int j = 0; j < arr.length - 1; j++) {
                //两两比较
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }*/

        //冒泡的次数
        for (int i = 0; i < arr.length; i++) {
            //数组元素之间两两比较
            for (int j = 0; j < arr.length - 1 - i; j++) {
                //两两比较
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        for (int i : arr) {
            System.out.println("数组的元素值是:" + i);
        }
    }
}
```
### 选择排序(Selection Sort)
选择排序（选择排序）是一种简单直观的排序算法它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕

算法描述：
+ Ñ个记录的直接选择排序可经过N-1趟直接选择排序得到有序结果具体算法描述如下：
+ 初始状态：无序区为[R [1..N]，有序区为空;
+ 第我趟排序（I = 1,2,3，... N-1）开始时，当前有序区和无序区分别为[R [1..i-1]和R（i..n）。该趟排序从当前无序区中 - 选择关键字最小的记录R [k]，将它与无序区的第1个记录R交换，使R [1..i]和R [i + 1 .. n）的分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区;
+ n-1个趟结束，数组有序化了
![](/images/选择排序.gif)
```java
public class SelectorArraySortDemo {
    public static void main(String[] args) {
        // 获取系统的格林威治事件的毫秒值(1970.1.1)
        long start = System.currentTimeMillis();
        int[] arr = {12, 34, 8, 78, 56, 43, 99, 18, 24, 100, 256, 789, 345, 49, 88, 654};
        //选择排序
        //外层是获取每一个数组的下标位的值
       /* for (int i = 0; i < arr.length; i++) {
            //依次和数组的下标位的值进行比较
            for (int j = 0; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    //换位 借助中间的变量
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }*/
        // 优化
        for (int i = 0; i < arr.length; i++) {
            //依次和数组的下标位的值进行比较
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    //换位 借助中间的变量
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        long end = System.currentTimeMillis();
        System.out.println("消耗的时间是:" + (end - start));
        //遍历输出
        for (int k : arr) {
            System.out.println("数组的元素值是:" + k);
        }
    }
}
```
### 插入排序(insertion Sort)
插入排序（插入分页）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入
![](/images/插入排序.gif)
```java
public class InsertSortDemo {
    public static void main(String[] args) {
        int[] arr = {12, 34, 8, 78, 56, 43, 99, 18, 24};
        //插入排序
        for (int i = 0; i < arr.length - 1; i++) {
            // 获取当前下标下一位的值
            int temp = arr[i + 1];
            int index = i;
            // 再去比较
            while (index >= 0 && arr[index] > temp) {
                //进行换位
                arr[index + 1] = arr[index];
                index--;
            }
            //插入值 因为上边-- 下边的index要+1
            arr[index + 1] = temp;
        }

        for (int i : arr) {
            System.out.println("数组的元素值是:" + i);
        }
    }
}
```
### 希尔排序(Shell Sort)
1959年Shell发明，第一个突破O（n 2）的排序算法，是简单插入排序的改进版。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序
算法描述:
+ 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：
+ 选择一个增量序列T1，T2，...，TK，其中TI> TJ，TK = 1;
+ 按增量序列个数k，对序列进行k趟排序;
+ 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m的子序列，分别对各子表进行直接插入排序。仅增量因子为1时，整个序列作为一个表来处理，表长度即为整个序列的长度
![](/images/47.png)
![](/images/希尔排序.png)

```java
public static int[] ShellSort(int[] array) {
        int len = array.length;
        int temp, gap = len / 2;
        while (gap > 0) {
            for (int i = gap; i < len; i++) {
                temp = array[i];
                int preIndex = i - gap;
                while (preIndex >= 0 && array[preIndex] > temp) {
                    array[preIndex + gap] = array[preIndex];
                    preIndex -= gap;
                }
                array[preIndex + gap] = temp;
            }
            gap /= 2;
        }
        return array;
    }

```
由于多次插入排序，我们知道一次插入排序是稳定的，不会改变相同元素的相对顺序，但在不同的插入排序过程中，相同的元素可能在各自的插入排序中移动，如数组5，2，2，1，第一次排序第一个元素5会和第三个元素2交换，第二个元素2会和第四个元素1交换，原序列中两个2的相对前后顺序就被破坏了，所以希尔排序是一个不稳定的排序算法
![](/images/48.png)

### 归并排序
和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是O(n log n）的时间复杂度。代价是需要额外的内存空间。
归并排序 是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。归并排序是一种稳定的排序方法。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。
算法描述:
- 步骤1：把长度为n的输入序列分成两个长度为n/2的子序列；
- 步骤2：对这两个子序列分别采用归并排序；
- 步骤3：将两个排序好的子序列合并成一个最终的排序序列。
![](/images/归并排序.png)
![](/images/50.png))
```java
public static int[] MergeSort(int[] array) {
        if (array.length < 2) return array;
        int mid = array.length / 2;
        int[] left = Arrays.copyOfRange(array, 0, mid);
        int[] right = Arrays.copyOfRange(array, mid, array.length);
        return merge(MergeSort(left), MergeSort(right));
    }
    /**
     * 归并排序——将两段排序好的数组结合成一个排序数组
     *
     * @param left
     * @param right
     * @return
     */
    public static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        for (int index = 0, i = 0, j = 0; index < result.length; index++) {
            if (i >= left.length)
                result[index] = right[j++];
            else if (j >= right.length)
                result[index] = left[i++];
            else if (left[i] > right[j])
                result[index] = right[j++];
            else
                result[index] = left[i++];
        }
        return result;
    }
```
### 快速排序(Quick sort)
快速排序（Quicksort）是对 冒泡排序的一种改进。基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排
序， 整个排序过程可以递归进行，以此达到整个数据变成有序序列

算法描述:
+ 快速排序使用分治法来把一个串（名单）分为两个子串（子列表）具体算法描述如下：
+ 从数列中挑出一个元素，称为“基准”（pivot）;
+ 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置这个称为分区（分区）操作。
+ 递归地（递归）把小于基准值元素的子数列和大于基准值元素的子数列排序
![](/images/快速排序.png)
```java
class QuickSort: BaseSort {
    override func sortAction() {
        sort(0, arrayList.count)
    }
    func sort(_ begin: NSInteger, _ end: NSInteger) {
        if end-begin < 2 { return }
        // 确定基准值的元素
        let mid = pivotIndex(begin, end-1)
        sort(begin, mid)
        sort(mid+1, end)
    }
    func pivotIndex(_ begin: NSInteger, _ end: NSInteger) -> NSInteger {
        // 随机一个基准值元素与第一个交换
        let random = Int(arc4random_uniform(UInt32(end-begin)))+begin
        swap(begin, random)
        let pivotValue = arrayList[begin]
        var beginIndex = begin
        var endIndex = end
        while beginIndex < endIndex {
            while beginIndex < endIndex {
                if cmpValue(pivotValue, arrayList[endIndex]) < 0 {
                    endIndex-=1
                }else{
                    arrayList[beginIndex] = arrayList[endIndex]
                    beginIndex+=1
                    break
                }
            }
            while beginIndex < endIndex {
                if cmpValue(pivotValue, arrayList[beginIndex]) > 0 {
                    beginIndex+=1
                }else{
                    arrayList[endIndex] = arrayList[beginIndex]
                    endIndex-=1
                    break
                }
            }
        }
        arrayList[beginIndex] = pivotValue
        return beginIndex
    }
}
```
## 方法
方法是代码块或语句集合，或者是组合在一起以执行特定任务或操作的一组代码。它用于实现代码的可重用性。我们编写一次方法，并多次使用它。我们不需要一次又一次地编写代码。它还提供了代码的简单修改和可读性，只需添加或删除一个代码块
### 方法的声明
![](/images/51.png)
+ 访问修饰符:
  + public: 当我们在应用程序中使用公共说明符时，所有类都可以访问该方法
  + protected: 当我们使用保护访问说明符时，该方法可以在同一包中访问，也可以在不同包中的子类中访问
  + default : 当我们在方法声明中不使用任何访问说明符时，Java 默认使用缺省访问说明符。它仅从同一包中可见
  + private: 当我们使用私有访问说明符时，只能在定义该方法的类中访问该方法
+ 修饰符:
  + static 静态关键字修饰,类成员/类方法,使用类名直接方法
  + abstract: abstract修饰的方法是抽象方法,只有方法声明,不需要方法体,抽象方法所在的类必须是抽象类
  + synchronized: 同步修饰的方法是同步方法。线程安全。
+ 返回值类型:
  + 返回类型是该方法返回的数据类型。它可能具有基元数据类型，对象，集合，void等。如果该方法不返回任何内容，则使用 void 关键字
+ 方法名称:
  + 使用小驼峰命名法
  + 使用英文单词命名,命名要有意义
+ 参数列表:
  + 它是用逗号分隔并括在一对括号中的参数列表。它包含数据类型和变量名称。如果该方法没有参数，请将括号留空
```java
public class Numbers {
    public static void main(String[] args) {
        System.out.print("Hello World");
    }
}
```

### 方法的调用
```java
public class MethodDemoOne {
    public static void main(String[] args) {
        // 方法的调用
        hello();
        hello();
        hello();
        hello();
        say();
        //调用带参数的方法 调用方法的时候根据方法定义的参数的数据类型 传入相匹配的值是真实的值 实参
        hai(" 靓仔");
        // 调用返回值的方法
        int num = sum();
        System.out.println(num);
        System.out.println(sum());
        
        // 调用带参数和返回值的方法
        int result = sumNum(100, 233);
        System.out.println(result);
    }

    /**
     * 声明一个方法
     */
    public static void hello() {
        System.out.println("Hello World");
    }

    /**
     * 没有参数 没有返回值的方法
     */
    public static void say() {
        System.out.println("sayHello");
    }

    /**
     * 参数只有变量的声明 没有赋值  参数称之为形式参数 简称形参
     */
    public static void hai(String world) {
        System.out.println("say Hai " + world);
    }

    /**
     * 带返回值的方法
     **/
    public static int sum() {
        System.out.println("sum 求和");
        return 100;
    }

    /**
     * 有返回值和参数的方法
     *
     * @param num 整数类型的值
     * @return int
     */
    public static int sumNum(int num, int num1) {
        return num + num1;
    }
}
```
### 方法的生命周期
```java
class Demo{
	public static void main(String [] args){
		System.out.println("Hello World");
	}
}
```
```shell
E:\
λ javap -c Demo.class
Compiled from "Demo.java"
class Demo {
  Demo();
    Code:
       0: aload_0
       1: invokespecial #1                  // Method java/lang/Object."<init>":()V
       4: return

  public static void main(java.lang.String[]);
    Code:
       0: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
       3: ldc           #3                  // String Hello World
       5: invokevirtual #4                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V
       8: return
}
```
**`javap -v(-verbose) JavapTest.class`:输出附加信息(包括行号、本地变量表、反汇编等详细信息),-v是最全的**

```shell
E:\
λ javap -v Demo.class
Classfile /E:/Demo.class
  Last modified 2022年10月3日; size 413 bytes
  MD5 checksum 8b19bf307dca3b058dfdd14b100b98ff
  Compiled from "Demo.java"
class Demo
  minor version: 0
  major version: 55
  flags: (0x0020) ACC_SUPER
  this_class: #5                          // Demo
  super_class: #6                         // java/lang/Object
  interfaces: 0, fields: 0, methods: 2, attributes: 1
Constant pool:
   #1 = Methodref          #6.#15         // java/lang/Object."<init>":()V
   #2 = Fieldref           #16.#17        // java/lang/System.out:Ljava/io/PrintStream;
   #3 = String             #18            // Hello World
   #4 = Methodref          #19.#20        // java/io/PrintStream.println:(Ljava/lang/String;)V
   #5 = Class              #21            // Demo
   #6 = Class              #22            // java/lang/Object
   #7 = Utf8               <init>
   #8 = Utf8               ()V
   #9 = Utf8               Code
  #10 = Utf8               LineNumberTable
  #11 = Utf8               main
  #12 = Utf8               ([Ljava/lang/String;)V
  #13 = Utf8               SourceFile
  #14 = Utf8               Demo.java
  #15 = NameAndType        #7:#8          // "<init>":()V
  #16 = Class              #23            // java/lang/System
  #17 = NameAndType        #24:#25        // out:Ljava/io/PrintStream;
  #18 = Utf8               Hello World
  #19 = Class              #26            // java/io/PrintStream
  #20 = NameAndType        #27:#28        // println:(Ljava/lang/String;)V
  #21 = Utf8               Demo
  #22 = Utf8               java/lang/Object
  #23 = Utf8               java/lang/System
  #24 = Utf8               out
  #25 = Utf8               Ljava/io/PrintStream;
  #26 = Utf8               java/io/PrintStream
  #27 = Utf8               println
  #28 = Utf8               (Ljava/lang/String;)V
{
  Demo();
    descriptor: ()V
    flags: (0x0000)
    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: invokespecial #1                  // Method java/lang/Object."<init>":()V
         4: return
      LineNumberTable:
        line 1: 0

  public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: (0x0009) ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=1, args_size=1
         0: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
         3: ldc           #3                  // String Hello World
         5: invokevirtual #4                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V
         8: return
      LineNumberTable:
        line 3: 0
        line 4: 8
}
SourceFile: "Demo.java"
```
### 方法的重载
方法的重载:
+ 在同一个类中,方法的名称相同,参数列表不同(个数不同/数据类型不同/顺序不同)与返回值无关
方法重载的好处:
+ 重载扩展了方法的使用,方法的名称相同根据不同的参数去调用同名的重载的方法就可以了
```java
public class MethodDemoFour {
    public static void main(String[] args) {
        System.out.println(sum(100, 200));
        System.out.println(sum(666, " 哈哈哈哈哈"));
        System.out.println(sum(100, 200, 400));
    }

    /**
     * 方法的重载
     */
    public static int sum(int num, int num2) {
        return num + num2;
    }

    /**
     * 与返回值无关
     */
   /* public static String sum(int num, int num2) {
        return num + num2+ "";
    }*/
    public static String sum(int num, String str) {
        return num + str;
    }

    public static int sum(int num, int num2, int num3) {
        return num + num2 + num3;
    }
}
```
### 可变参数(JAVA5新特性)
```java
public class MethodDemoFive {
    public static void main(String[] args) {
        sum(12);
        sum(12, 33);
        sum(12, 33, 44);
        sum(12, 33, 44, 55);
        hello("hello", 12);
        hello("hello", 12, 33);
        hello("hello", 12, 33, 55);
    }

    /**
     * 可变参数 本质就是一个数组
     */
    public static void sum(int... num) {
        System.out.println(num);
        System.out.println(Arrays.toString(num));
    }

    /**
     * Vararg parameter must be the last in the list
     * 可变参数必须在参数列表的末尾
     */
    public static void hello(String str, int... num) {
        System.out.println(str);
        System.out.println(Arrays.toString(num));
    }
}
```
遇到方法重载的情况怎么办呢？会优先匹配固定参数还是可变参数的方法呢？
答案是会优先匹配固定参数的方法，因为固定参数的方法匹配度更高
