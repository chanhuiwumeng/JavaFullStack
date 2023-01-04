---
# NavLink
prev:
    text: java基础语法
    link: /javase/java基础语法.md
# NavLink
next:
    text: 常用类
    link: /javase/常用类.md
---
![](/images/R-C.gif)
# 面向对象(OOP) 
“面向过程”(Procedure Oriented)是一种以过程为中心的编程思想，简称 OP。“面向过程”
也可称之为“面向记录”编程思想，就是分析出解决问题所需要的步骤，然后用函数把这些步
骤一步一步实现，使用的时候一个一个依次调用就可以了。所以面向过程的编程方式关注点不
在“事物”上，而是做这件事分几步，先做什么，后做什么。例如：早晨起来：起床、穿衣、
洗漱、上班，只要按照这个步骤来，就能实现“一天”的功能，整个这个过程中关注的是一步
一步怎么做，并没有关注“人”这个事物。再例如：开门、调整座椅、系好安全带、踩离合、
启动、挂档、给油，只要按照这个步骤来，车就走了，显然关注点还是在步骤上，只要实现每
一步就行，整个过程并没有关注“汽车”这个事物。

“面向对象”(Object Oriented)是一种以对象为中心的编程思想，简称 OO。随着计算机技
术的不断提高，计算机被用于解决越来越复杂的问题。一切事物皆对象，通过面向对象的方式，
将现实世界的事物抽象成对象。通过面向对象的方法，更利于用人理解的方式对复杂系统进行
分析、设计与编程。同时，面向对象能有效提高编程的效率，通过封装技术，可以像搭积木的
一样快速开发出一个全新的系统。面向对象将对象作为程序的基本单元，将程序和数据封装其
中，以提高软件的重用性、灵活性和扩展性。
使用面向对象编程思想开发系统，在现代开发中会将面向对象贯穿整个过程，一般包括：
OOA/OOD/OOP：
+ ① OOA:面向对象分析(Object-Oriented Analysis)
+ ② OOD:面向对象设计(Object-Oriented Design)
+ ③ OOP:面向对象编程(Object-Oriented Programming)

面向过程和面向对象有什么关系呢?

面向过程其实是最为实际的一种思考方式，就算是面 向对象的方法也是含有面向过程的思想。可以说面向过程是一种基础的方法。它考虑的是实际地实现。一般的面向过程是从上往下步步求精。面向对象主要是把事物给对象化，对象包括属 
性与行为。当程序规模不是很大时，面向过程的方法还会体现出一种优势。因为程序的流程很
清楚，按着模块与函数的方法可以很好的组织。但对于复杂而庞大的系统来说,面向过程显得就很无力了.
## 面向对象和面向过程分析
面向过程是直接将解决问题的步骤分析出来,然后用函数把步骤一步一步实现，然后再依次调用就可以了;而面向对象是将构成问题的事物,分解成若干个对象,建立对象的目的不是为了完成一个步骤,而是为了描述某个事物在解决问题过程中的行为。
### 面向过程 (西红柿鸡蛋面)

![](/images/52.png)

在做西红柿鸡蛋面的过程中每一个步骤，我们都要参与到，这就是面向过程。

**总结如下:**

面向过程是一种以过程为中心的编程思想，面向过程编程是基于“冯·诺依曼”模型的。在这种模型中，程序与变量一起存储，程序中包含一系列指令，并把这些指令以函数的方式组织起来。

特性:
+ 自顶向下、逐步求精、模块化

优点: 

+ 性能比面向对象高，因为类调用需要实例化，开销比较大，比较消耗资源。
+ 如单片机、嵌入式开发、Linux/Unix等一般采用面向过程开发，因为在它们看来性能是最重要的因素。

缺点:

+ 没有面向对象易维护、易复用、易扩展
（按照面向过程的思想，在解决问题时，各函数之间是为了这个问题服务；而面向对象的思想，则是站在提出问题的主体的角度去解决问题，可将解决这一具体问题的步骤，抽象为解决这一类问题的方法，以后再遇到类似的问题，可以复用解决思路）
### 面向对象
![](/images/53.png)
面向对象封装了面向过程,在面向对象中APP中的商家就是对象,他们各自封装了做饭的每一个步骤,我们只需要去调用每一个商家的特性(刀削面,菠菜面,牛肉面)和做饭的方式(油泼,干拌,炒,汤面)等去使用就可以了。

**总结如下:**

面向对象是按人们认识客观世界的系统思维方式，采用基于对象（实体）的概念建立模型，模拟客观世界分析、设计、实现软件的方法。通过面向对象的理念，将计算机软件系统能与现实世界中的系统一一对应。

特性:
+ 封装、继承、多态、抽象

优点:

+ 易维护、易复用、易扩展（在解释面向过程的缺点时有对面向对象的优点进行解释）

缺点:
+ 性能比面向过程低

## JAVA的面向对象
在面向过程和面向对象的分析举例中，了解到，面向过程中自己动手做的过程中每一步都要参与进去,面向对象就是调用封装好的商家，而商家将做饭的每一个步骤封装在自己的后台，我们看不到
也不了解，只需要达到我们的目的就可以了。

软件存在的意义就是为了解决现实世界当中的问题，它必然模拟现实世界，也就是说现实世界中有什么，软件中就对应有什么。

面向对象编程思想中关注点是“对象”或者“事物”，那么在编程语言当中要想创建对象则必须先有类，那么类和对象分别是什么，它们的区别和联系是什么呢？

假设我们正在制作一款使用许多汽车的游戏。有数百种不同的汽车，所以我们需要在我们的游戏中反映这一点。在过去，你会编写代码来定义每一辆车：颜色，品牌，型号，燃料类型等......每次你需要在游戏中生产一辆新车时，你都需要重写所有这些，即使这些车是相似的。这是很多重复的代码。
编程的黄金法则之一：**永远不要编写重复的代码**。它浪费时间并且容易出错。如果所有汽车都有一些共同的特征，那么一定有一种更简单的方法来创造它们。我们可以创建一个通用的汽车类。它将包含所有汽车共享的特征。我们可以立即生成一个 Car 类型的对象，只要我们想要多少。
![](/images/image-asset.jpeg)

可以得知:**类是现实世界当中具有共同特征的事物进行抽象形成的模板或概念。而对象是实际存在的个体**。

**类的理解:**
+ 类是对现实生活中一类具有共同属性和行为的事物的抽象
+ 类是对象的数据类型，类是具有相同属性和行为的一组对象的集合
+ 简单理解：类就是对现实事物的一种描述

**类的组成:**

+ 属性：指事物的特征，例如：手机事物（品牌，价格，尺寸）
+ 行为：指事物能执行的操作，例如：手机事物（打电话，发短信）

**类和对象的关系**

+ 类：类是对现实生活中一类具有共同属性和行为的事物的抽象
+ 对象：是能够看得到摸的着的真实存在的实体
+ 简单理解：类是对事物的一种描述，对象则为具体存在的事物
### JAVA代码表示类
类由属性和行为组成,在JAVA代码中我们可以使用变量表示属性,方法表示行为,变量和方法组成了类也称之为**成员变量**和**成员方法**.
```java
public class Car{
/**
*颜色
*/
String color;
/**
*厂家
*/
String make;
/**
*类型
*/
String model;
/**
*燃料类型
*/
String fuelType;
/**
* 跑
*/
public void run(){
    
    }
}
```
### 使用对象
对象是一个类的真实存在的事物,看得见摸得着的实际存在的事物,在编程中实际存在的东西就是在内存中存在,首先对类进行实例化,就是开辟属于类的对象的内存空间(使用new关键字)。
```java
public class CarDemo{
    public static void main(String[] args){
            // 创建类的实例化的对象 开辟对象的内存空间 在给对象的成员变量(属性)赋值
            Car car = new Car();
            // com.dcrj.entity.Car@6a5fc7f7
            System.out.println(car);
            car.color="白色";
            car.make="一汽";
            car.model="小轿车";
            car.fuelType="汽油";
            System.out.println(car.color+"---"+car.make+"---"+car.model);
            // 创建类的实例化的对象 开辟对象的内存空间 在给对象的成员变量(属性)赋值
            Car car1 = new Car();
            // com.dcrj.entity.Car@3b6eb2ec
            System.out.println(car1);
            car1.color="黑色";
            car1.make="华晨";
            car1.model="SUV";
            car1.fuelType="电";
            System.out.println(car1.color+"---"+car1.make+"---"+car1.model);
    }
}
```
在实例化对象的时候首先声明一个类类型的变量Car car=,在通过new关键字在计算机的内存中开辟属于对象的内存空间,JVM在运行程序的时候会在堆内存空间中分配属于对象的内存空间，在个
对象的属性进行赋值，如果没有对对象的属性进行赋值，系统会根据对象的属性的数据类型添加相对应的默认的值,然后JVM会根据哈希算法计算出一个无符号的十六进制的地址值赋值给car变量，
每次在使用对象的时候都是car变量根据保存的地址值找到对象所在的内存地址空间，在获取对象地址空间中的属性值去使用.
![](/images/990.png)

[https://docs.oracle.com/javase/tutorial/java/javaOO/objectcreation.html](https://docs.oracle.com/javase/tutorial/java/javaOO/objectcreation.html)
`使用JDK自带的HSDB查看JVM的内存信息`
### 创建对象的流程
![](/images/54.png)
### java对象的组成
[https://openjdk.org/groups/hotspot/docs/HotSpotGlossary.html](https://openjdk.org/groups/hotspot/docs/HotSpotGlossary.html)
![](/images/55.png)

**1、对象头**

+ Mark Word，对象运行时数据，动态定义位数据。包含 HashCode、GC 分代年龄、锁状态标志、线程持有的锁、偏向线程 ID、偏向时间戳等。32 位和 64 位的 VM 里 Mark Word 的长度分别 32 bit 和 64 bit。
+ 类型指针，对象指向所属 class 的元数据的指针，32 位 VM 4 byte，64 位 VM 8 byte(-XX:+UseCompressedOops 压缩指针 4 byte)。非必需，取决 JVM 实现。
+ 数组对象必须包含长度信息，4 byte。

**2、实例数据**

+ 按分配策略和源码定义的顺序，存储对象的字段数据。
+ 8 byte：long、double
+ 4 byte：int、float、oops(Ordinary Object Pointers)
+ 2 byte：short、char
+ 1 byte：byte
+ 1 bit：boolean

**3、对齐填充**

+ 非必需，保证对象大小是 8 字节的整数倍进行填充的长度。
+ 没有特殊含义，仅占位。

**4、new关键字创建对象的过程**

+ new 语法创建普通 Java 对象的过程
+ 检查类是否已加载、解析、初始化，若没有则进行。
+ 为新对象分配内存。规整的内存使用指针碰撞(Bump The Pointer)；不规整的内存使用列表记录可用内存的方式配分叫空闲列表(Free List)。
+ 配分内存的两种安全方式：CAS；每个线程在 Heap 中预先分配一小块内存，即本地线程分配缓存(Thread Local Allocation Buffer)。
+ 初始化分配的内存，字段设为默认零值
+ 根据 JVM 运行的情况，设置对象头信息。如类的元数据、HashCode、GC 分代年龄、偏向锁...
+ 执行构造函数、字段赋值...
![](/images/58.png)
[OpenJDK Github源码地址 https://github.com/openjdk/jdk](https://github.com/openjdk/jdk)

下载JDK11的源码,`jdk-jdk-11-28\jdk-jdk-11-28\src\hotspot\share\oops\markOop.hpp`,Mark Word对应到C++的代码markOop.hpp
```c++
// The markOop describes the header of an object.
//
// Note that the mark is not a real oop but just a word.
// It is placed in the oop hierarchy for historical reasons.
//
// Bit-format of an object header (most significant first, big endian layout below):
//
//  32 bits:
//  --------
//             hash:25 ------------>| age:4    biased_lock:1 lock:2 (normal object)
//             JavaThread*:23 epoch:2 age:4    biased_lock:1 lock:2 (biased object)
//             size:32 ------------------------------------------>| (CMS free block)
//             PromotedObject*:29 ---------->| promo_bits:3 ----->| (CMS promoted object)
//
//  64 bits:
//  --------
//  unused:25 hash:31 -->| unused:1   age:4    biased_lock:1 lock:2 (normal object)
//  JavaThread*:54 epoch:2 unused:1   age:4    biased_lock:1 lock:2 (biased object)
//  PromotedObject*:61 --------------------->| promo_bits:3 ----->| (CMS promoted object)
//  size:64 ----------------------------------------------------->| (CMS free block)
//
//  unused:25 hash:31 -->| cms_free:1 age:4    biased_lock:1 lock:2 (COOPs && normal object)
//  JavaThread*:54 epoch:2 cms_free:1 age:4    biased_lock:1 lock:2 (COOPs && biased object)
//  narrowOop:32 unused:24 cms_free:1 unused:4 promo_bits:3 ----->| (COOPs && CMS promoted object)
//  unused:21 size:35 -->| cms_free:1 unused:7 ------------------>| (COOPs && CMS free block)
//
//  - hash contains the identity hash value: largest value is
//    31 bits, see os::random().  Also, 64-bit vm's require
//    a hash value no bigger than 32 bits because they will not
//    properly generate a mask larger than that: see library_call.cpp
//    and c1_CodePatterns_sparc.cpp.
//
//  - the biased lock pattern is used to bias a lock toward a given
//    thread. When this pattern is set in the low three bits, the lock
//    is either biased toward a given thread or "anonymously" biased,
//    indicating that it is possible for it to be biased. When the
//    lock is biased toward a given thread, locking and unlocking can
//    be performed by that thread without using atomic operations.
//    When a lock's bias is revoked, it reverts back to the normal
//    locking scheme described below.
//
//    Note that we are overloading the meaning of the "unlocked" state
//    of the header. Because we steal a bit from the age we can
//    guarantee that the bias pattern will never be seen for a truly
//    unlocked object.
//
//    Note also that the biased state contains the age bits normally
//    contained in the object header. Large increases in scavenge
//    times were seen when these bits were absent and an arbitrary age
//    assigned to all biased objects, because they tended to consume a
//    significant fraction of the eden semispaces and were not
//    promoted promptly, causing an increase in the amount of copying
//    performed. The runtime system aligns all JavaThread* pointers to
//    a very large value (currently 128 bytes (32bVM) or 256 bytes (64bVM))
//    to make room for the age bits & the epoch bits (used in support of
//    biased locking), and for the CMS "freeness" bit in the 64bVM (+COOPs).
//
//    [JavaThread* | epoch | age | 1 | 01]       lock is biased toward given thread
//    [0           | epoch | age | 1 | 01]       lock is anonymously biased
//
//  - the two lock bits are used to describe three states: locked/unlocked and monitor.
//
//    [ptr             | 00]  locked             ptr points to real header on stack
//    [header      | 0 | 01]  unlocked           regular object header
//    [ptr             | 10]  monitor            inflated lock (header is wapped out)
//    [ptr             | 11]  marked             used by markSweep to mark an object
//                                               not valid at any other time
//
//    We assume that stack/thread pointers have the lowest two bits cleared.
```
**64位JVM的对象头信息(没有指针压缩)**
```markdown
|--------------------------------------------------------------------------------------------------------------|---------------------------|
|                                              Object Header (128 bits)                                        |   state                   |
|--------------------------------------------------------------------------------------------------------------|---------------------------|
|                        Mark Word (64 bits)                                    |      Klass Word (64 bits)    |   默认开启指针压缩(32bits)                        |
|--------------------------------------------------------------------------------------------------------------|---------------------------|
|  unused:25 | identity_hashcode:31 | unused:1 | age:4 | biased_lock:1 | lock:2 |     OOP to metadata object   |  Normal(无锁)              |
|----------------------------------------------------------------------|--------|------------------------------|---------------------------|
|  thread:54 |         epoch:2      | unused:1 | age:4 | biased_lock:1 | lock:2 |     OOP to metadata object   | Biased(偏向锁)             |
|----------------------------------------------------------------------|--------|------------------------------|---------------------------|
|                     ptr_to_lock_record:62                            | lock:2 |     OOP to metadata object   |  LightWeight Locked(轻量锁)|
|----------------------------------------------------------------------|--------|------------------------------|---------------------------|
|                     ptr_to_heavyweight_monitor:62                    | lock:2 |     OOP to metadata object   |  HeavyWeight Locked(重量锁_|
|----------------------------------------------------------------------|--------|------------------------------|---------------------------|
|                                                                      | lock:2 |     OOP to metadata object   |    Marked for GC          |
|--------------------------------------------------------------------------------------------------------------|---------------------------|
```
**64位JVM对象头信息(开启指针压缩)**
```markdown
|--------------------------------------------------------------------------------------------------------------|---------------------------|
|                                              Object Header (96 bits)                                        |   state                   |
|--------------------------------------------------------------------------------------------------------------|---------------------------|
|                        Mark Word (64 bits)                                    |      Klass Word (32 bits)    |                           |
|--------------------------------------------------------------------------------------------------------------|---------------------------|
|  unused:25 | identity_hashcode:31 | unused:1 | age:4 | biased_lock:1 | lock:2 |     OOP to metadata object   |  Normal(无锁)              |
|----------------------------------------------------------------------|--------|------------------------------|---------------------------|
|  thread:54 |         epoch:2      | unused:1 | age:4 | biased_lock:1 | lock:2 |     OOP to metadata object   | Biased(偏向锁)             |
|----------------------------------------------------------------------|--------|------------------------------|---------------------------|
|                     ptr_to_lock_record                               | lock:2 |     OOP to metadata object   |  LightWeight Locked(轻量锁)|
|----------------------------------------------------------------------|--------|------------------------------|---------------------------|
|                     ptr_to_heavyweight_monitor                       | lock:2 |     OOP to metadata object   |  HeavyWeight Locked(重量锁_|
|----------------------------------------------------------------------|--------|------------------------------|---------------------------|
|                                                                      | lock:2 |     OOP to metadata object   |    Marked for GC          |
|--------------------------------------------------------------------------------------------------------------|---------------------------|
```
+ lock:  锁状态标记位，该标记的值不同，整个mark word表示的含义不同。
+ biased_lock：偏向锁标记，为1时表示对象启用偏向锁，为0时表示对象没有偏向锁。
![](/images/57.png)
+ age：Java GC标记位对象年龄，4位的表示范围为0-15，因此对象经过了15次垃圾回收后如果还存在，则肯定会移动到老年代中。
+ identity_hashcode：对象标识Hash码，采用延迟加载技术。当对象使用HashCode()计算后，并会将结果写到该对象头中。当对象被锁定时，该值会移动到线程Monitor中。
+ thread：持有偏向锁的线程ID和其他信息。这个线程ID并不是JVM分配的线程ID号，和Java Thread中的ID是两个概念。
+ epoch：偏向时间戳。
+ ptr_to_lock_record：指向栈中锁记录的指针。
+ ptr_to_heavyweight_monitor：指向线程Monitor的指针。

具体如何实现我们可以借助OpenJDK的JOL工具类来查看:
```xml
<dependency>
<groupId>org.openjdk.jol</groupId>
<artifactId>jol-core</artifactId>
<version>0.9</version>            
</dependency>
```
```java
public class Test {
    public static void main(String[] args) {
        int primitive = 3;
        System.out.println(VM.current().details());
        System.out.println(ClassLayout.parseInstance(primitive).toPrintable());
    }
}
```
```properties
# WARNING: Unable to get Instrumentation. Dynamic Attach failed. You may add this JAR as -javaagent manually, or supply -Djdk.attach.allowAttachSelf
# Running 64-bit HotSpot VM.
# Using compressed oop with 3-bit shift.
# Using compressed klass with 0x0000000800000000 base address and 0-bit shift.
# Objects are 8 bytes aligned.
# Field sizes by type: 4, 1, 1, 2, 2, 4, 4, 8, 8 [bytes]
# Array element sizes: 4, 1, 1, 2, 2, 4, 4, 8, 8 [bytes]

java.lang.Integer object internals:
OFF  SZ   TYPE DESCRIPTION               VALUE
  0   8        (object header: mark)     0x0000000000000001 (non-biasable; age: 0)
  8   4        (object header: class)    0x00012cf0
 12   4    int Integer.value             3
Instance size: 16 bytes
Space losses: 0 bytes internal + 0 bytes external = 0 bytes total
```
![](/images/59.png)
```java
public class Student {
    String name = "joke";
}
```
```java
public class StudentDemo {
    public static void main(String[] args) throws InterruptedException {
        Student stu = new Student();
        System.out.println(ClassLayout.parseInstance(stu).toPrintable());
        System.out.println(Integer.toHexString(stu.hashCode()));
        System.out.println(ClassLayout.parseInstance(stu).toPrintable());
        Student[] stus = new Student[5];
        System.out.println(ClassLayout.parseInstance(stus).toPrintable());
    }
}
```
```properties
# WARNING: Unable to get Instrumentation. Dynamic Attach failed. You may add this JAR as -javaagent manually, or supply -Djdk.attach.allowAttachSelf
com.dcrj.test.Student object internals:
OFF  SZ               TYPE DESCRIPTION               VALUE
  0   8                    (object header: mark)     0x0000000000000005 (biasable; age: 0)
  8   4                    (object header: class)    0x00067248
 12   4   java.lang.String Student.name              (object)
Instance size: 16 bytes
Space losses: 0 bytes internal + 0 bytes external = 0 bytes total

704921a5
com.dcrj.test.Student object internals:
OFF  SZ               TYPE DESCRIPTION               VALUE
  0   8                    (object header: mark)     0x000000704921a501 (hash: 0x704921a5; age: 0)
  8   4                    (object header: class)    0x00067248
 12   4   java.lang.String Student.name              (object)
Instance size: 16 bytes
Space losses: 0 bytes internal + 0 bytes external = 0 bytes total

[Lcom.dcrj.test.Student; object internals:
OFF  SZ                    TYPE DESCRIPTION               VALUE
  0   8                         (object header: mark)     0x0000000000000001 (non-biasable; age: 0)
  8   4                         (object header: class)    0x000df478
 12   4                         (array length)            5
 12   4                         (alignment/padding gap)   
 16  20   com.dcrj.test.Student Student;.<elements>       N/A
 36   4                         (object alignment gap)    
Instance size: 40 bytes
Space losses: 4 bytes internal + 4 bytes external = 8 bytes total
```
![](/images/56.png)

**普通对象总共16B，对象头占用12B，另外4B（64位虚拟机上对象的大小必须是8的倍数）为对齐填充字节**

**JDK11默认的对象就是使用的偏量级的锁,JDK8默认是无锁状态**

**调用了hashCode()方法以后,存储的就是hashCode的值**

`关于深入对象的内存和锁参考多线程synchronized锁的升级`

## JAVA源文件定义规则

当在一个源文件中定义多个类，并且还有import语句和package语句时，要特别注意这些规则。
+ 一个源文件中只能有一个 public 类
+ 一个源文件可以有多个非 public 类
+ 源文件的名称应该和 public 类的类名保持一致。例如：源文件中 public 类的类名是 Employee，那么源文件应该命名为Employee.java。
+ 如果一个类定义在某个包中，那么 package 语句应该在源文件的首行。
+ 如果源文件包含 import 语句，那么应该放在 package 语句和类定义之间。如果没有 package 语句，那么 import 语句应该在源文件中最前面。
+ import 语句和 package 语句对源文件中定义的所有类都有效。在同一源文件中，不能给不同的类不同的包声明。
类有若干种访问级别，并且类也分不同的类型：抽象类和 final 类等

## 封装
在面向对象程式设计方法中，封装（英语：Encapsulation）是指一种将抽象性函式接口的实现细节部分包装、隐藏起来的方法。
封装可以被认为是一个保护屏障，防止该类的代码和数据被外部类定义的代码随机访问。 要访问该类的代码和数据，必须通过严格的接口控制。
封装最主要的功能在于我们能修改自己的实现代码，而不用修改那些调用我们代码的程序片段。
适当的封装可以让程式码更容易理解与维护，也加强了程式码的安全性。
封装的优点:
1. 良好的封装能够减少耦合。
2. 类内部的结构可以自由修改。
3. 可以对成员变量进行更精确的控制。
4. 隐藏信息，实现细节。
> 还有一种更广义的封装的定义:
> 1. 项目的封装,将一个项目的业务代码封装在同一个项目中
> 2. 包的封装,将不同业务类型的代码封装在不同的包中,包名使用特定单词的进行区分:entity,dao,impl,service,utils,controller....
> 3. 类的封装: JAVA中最小的开发单位就是使用类(xx.class)进行代码的封装,减少代码的耦合和隐藏信息实现细节
> 4. 方法的封装,业务功能尽可能细粒度的拆分成为多个方法,结合返回值类型,泛型等做到公共的使用。
### JAVA实现封装的步骤
1. 修改类中属性的可见性来限制对属性的访问,一般使用private进行修饰,使用private(私有化)修饰的属性只能在当前的类中进行访问,在其他的类中就访问不到了,
这样就实现了对类的属性的隐藏(例如:在现实的生活中我们不能随意的去访问陌生人的信息,身高,体重,年龄,出生日期等)
```javas
public class Student{
    private Integer age;
    private String name;
}
```
2. 因为类的属性使用了private 修饰,在别的类中不能访问属性的信息,所以需要对每个值属性提供对外的公共方法访问,也就是创建一对赋取值方法,用于对私有属性的访问,
通常我们是提高属性的get和set方法,用于获取属性和修改属性的值.
```java
public class Person{
    private String name;
    private int age;

    public int getAge(){
      return age;
    }

    public String getName(){
      return name;
    }

    public void setAge(int age){
      this.age = age;
    }

    public void setName(String name){
      this.name = name;
    }
}
```
采用 this 关键字是为了解决实例变量（private String name）和局部变量（setName(String name)中的name变量）之间发生的同名的冲突
```java
public class RunPerson{
   public static void main(String args[]){
      Person person = new Person();
      person.setName("James");
      person.setAge(20);
      System.out.print("Name : " + person.getName()+ " Age : "+ person.getAge());
    }
}
```
以上实例中public方法是外部类访问该类成员变量的入口,任何要访问类中私有成员变量的类都要通过这些getter和setter方法。
### this关键字
```java
public class Person{
    private String name;
    private int age;

    public int getAge(){
      return age;
    }

    public String getName(){
      return name;
    }

    public void setAge(int age){
        System.out.println(this);
        // 直接打印this输出的就是对象的内存地址值
        //com.dcrj.entity.Person@2d6e8792
        this.age = age;
    }

    public void setName(String name){
      this.name = name;
    }
}
```
```java
public class RunPerson{
   public static void main(String args[]){
      Person person = new Person();
      person.setName("James");
      person.setAge(20);
      System.out.print("Name : " + person.getName()+ " Age : "+ person.getAge());
      Person personOne = new Person();
      personOne.setName("Kobe");
      personOne.setAge(40);
      System.out.print("Name : " + personOne.getName()+ " Age : "+ personOne.getAge());
    }
}
```
一个类是可以被实例化多个对象的,使用new关键字实例化多个对象,就是在堆中开辟新的内存空间,每一个对象在内存中都有属于自己的独立的内存空间,在JAVA中内存分为栈(Stack)空间和堆(Heap)空间.堆空间中保存对象的属性值信息,
JVM根据哈希算法计算出内存的地址值,赋值给栈空间中的变量去引用，每一个对象在给属性赋值的时候都要调用setXXX()方法,this就指向的是对象的内存地址值.
![](/images/60.png)

<p style="color: #EF4444">this关键字:this关键字代表当前类/子类的实例化对象,谁用就代表谁,在上边的示例中,person调用setter/getter方法this就代表person变量引用的对象,personOne使用就代表personOne引用的对象</p>

### 构造器(Constructor)
构造器是一个特殊的方法,这个特殊方法用于创建实例时执行初始化。
构造器是创建对象的重要途径（即使使用工厂模式、反射等方式创建对象,其实质依然是依赖于构造器）,因此,Java类必须包含 一个或一个以上的构造器.
```java
public class RunPerson{
   public static void main(String args[]){
    // 使用new关键字和构造器Person()实例化对象
      Person person = new Person();
      person.setName("James");
      person.setAge(20);
      System.out.print("Name : " + person.getName()+ " Age : "+ person.getAge());
    }
}
```
构造器最大的作用就是创建实例时执行初始化,所谓的初始化就是给对象的属性进行赋值,默认一般使用的是无参数的构造器,所以在开辟空间以后会根据对象的属性的数据类型添加默认值:
+ byte/short/int/long 默认值是0
+ float/double默认值是0.0
+ boolean默认值是false
+ 引用数据类型的默认值是null
+ char字节类型的默认值是\U0000(unicode编码)

在JAVA中的任意一个class创建成功以后,都包含一个默认的无参数的构造器,并且这个构造器是隐藏的,(一般写完.java文件以后,在编译为.class文件的过程中会自动添加无参数的构造器)
我们也可以手写出来.
![](/images/61.png)

### 构造器重载
有的时候为了方便创建实例时执行初始化的时候就给对象的属性进行赋值我们可以将构造器进行重载,同一个类里具有多个构造器，多个构造器的形参列表不同，即被
称为构造器重载。
```java
public class Cat {

    private int age;
    private String name;

    /**
     * 无参数的构造器
     */
    public Cat() {
    }

    /**
     * 一个参数的构造器
     */
    public Cat(int age) {
        this.age = age;
    }

    /**
     * 多个参数的构造器
     */
    public Cat(int age, String name) {
        this.age = age;
        this.name = name;
    }
}
```
```java
/**
使用不同类型的构造器进行实例化对象
*/
public static void main(String[] args) {
        Cat cat = new Cat();
        // com.dcrj.controller.Cat@2d6e8792
        System.out.println(cat);
        Cat catOne = new Cat(15);
        // com.dcrj.controller.Cat@2812cbfa
        System.out.println(catOne);
        Cat catTwo = new Cat(88, "小黄");
        // com.dcrj.controller.Cat@2acf57e3
        System.out.println(catTwo);
    }
```

<p style="color:#EF4444">注意事项:在进行构造器重载的时候一定要将无参数的构造器手写出来,不然带参数的构造器会覆盖无参数的构造器</p>

![](/images/62.png)

### 父类构造器
JAVA中任意类可以使用无参数的构造器实例化对象,是因为继承自Object类,Object类只有一个无参数的构造器提供,可以使用super关键字调用父类的构造器。
```java
public class Object {

    private static native void registerNatives();
    static {
        registerNatives();
    }

    /**
     * Constructs a new object.
     */
    @HotSpotIntrinsicCandidate
    public Object() {}
}
```
### 匿名对象
匿名对象就是没有名字的对象，使用匿名对象去调用方法，
- 匿名对象没有名次所以只能使用一次
- 匿名对象在使用完成以后就被GC回收了
- 匿名对象一般直接去调用方法和作为参数使用

```java
 public static void main(String[] args) {
        System.out.println(new Demo().age);
        new Demo();
    }
```
### 一个完整的JAVABEAN的定义
JavaBean 是一种JAVA语言写成的可重用组件。为写成JavaBean，类必须是具体的和公共的，并且具有无参数的构造器。JavaBean 通过提供符合一致性设计模式的公共方法将内部域暴露成员属性，set和get方法获取。众所周知，属性名称符合这种模式，其他Java 类可以通过自省机制(反射机制)发现和操作这些JavaBean 的属性。

**完整JAVABEAN的特性:**

第一，其中JavaBean为共有类，此类要使用访问权限对public进行修饰，主要是为了方便JSP的访问；
第二，JavaBean定义构造的方式时，一定要使用public修饰，同时不能要参数，不定义构造方式时，Java编译器可以构造无参数方式；
第三，JavaBean属性通常可以使用访问权限对private进行修饰，此种主要表示私有属性，但是也只能在JavaBean内使用，在声明中使用public修饰的则被认为是公有权限，主要是方便同时JSP进行交互；
第四，使用setXXX()的方法以及getXXX()的方法得到JavaBean里的私有属性XXX数值；
第五，JavaBean--定要放在包内，使用package进行自定义，也可以放在JavaBean代码第一行；
第六，对于部署好的JavaBean修改是，一定要重新编译节码文件，同时启动Tomcat服务器，之后便能够生效
## 继承
## 多态
## 抽象类和抽象方法
## 接口
## 内部类
