import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
// 回到顶部插件
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
// 搜索插件
import { searchPlugin } from '@vuepress/plugin-search'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
// import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
// 代码复制插件
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
// 图片缩放插件
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Java全栈知识体系',
    base:'/JavaFullStack/',
    description: '这是我的第一个 VuePress 站点',
    head: [['link', { rel: 'icon', href: '/images/java.svg' }]],
    theme: defaultTheme({
        logo: '/images/java.svg',
        navbar: [
            // NavbarItem
            {
                text: '计算机语言基础',
                link: '/guide/计算机语言基础.md',
            },
            // NavbarGroup
            {
                text: '✿JavaSE',
                children: ['/guide/Java发展历史背景.md',
                    '/javase/java开发工具.md',
                    '/javase/环境变量配置.md',
                    '/javase/java基础语法.md',
                    {
                        text:'面向对象核心思想',
                        children:[ '/javase/java面向对象.md']
                    },
                    '/javase/常用类.md',
                    '/javase/异常.md',
                    '/javase/泛型.md',
                    {
                        text: '高并发安全',
                        children: [ '/javase/thread/多线程基础.md',
                            '/javase/thread/线程的通信.md',
                            '/javase/thread/线程安全问题.md',
                            '/javase/thread/线程池.md',],
                    },
                    {
                        text:'集合',
                        children:['/javase/collection集合.md','/javase/map集合.md']
                    },
                    {
                        text:'IO流',
                        children:['/javase/bio.md','/javase/nio.md']
                    },
                    {
                        text:'网络编程',
                        children:['/javase/网络编程.md']
                    },
                    {
                        text:'JDK扩展',
                        children:['/javase/jdk扩展.md','/javase/枚举.md','/javase/反射.md','/javase/注解.md']
                    },
                    ],
            },
            {
                text: '数据库',
                children: [
                    {
                        text: 'Mysql',
                        children: ['/database/mysql/mysql基础.md',
                            '/database/mysql/mysql高级.md',
                            '/database/mysql/jdbc.md',
                            '/database/mysql/dbutils.md',
                            '/database/mysql/数据库连接池.md']
                    },
                    {
                        text: 'Redis',
                        children: ['/database/redis/redis基础.md','/database/redis/redis高级.md']
                    },
                    {
                        text: 'MongoDB',
                        children: ['/database/mongodb/mongodb.md']
                    }
                ],
            },
            {
                text: 'JavaEE',
                children: [
                    {
                        text: 'JavaWEB',
                        children: ['/javaee/javaweb/html.md',
                            '/javaee/javaweb/css.md',
                            '/javaee/javaweb/javascript.md',
                            '/javaee/javaweb/jquery.md',
                            '/javaee/javaweb/ajax.md',
                            '/javaee/javaweb/bootstrap.md',
                            '/javaee/javaweb/layui.md',
                           ]
                    },{
                    text: 'WEB服务器',
                        children: ['/javaee/server/tomcat.md','/javaee/server/jetty.md']
                    },
                    {
                        text: 'Servlet',
                        children: ['/javaee/servlet/servlet.md','/javaee/servlet/jsp.md','/javaee/servlet/thymeleaf.md','/javaee/servlet/shiro.md']
                    },
                    {
                        text: 'Linux',
                        children:['/javaee/linux/linux.md']
                    }
                ],
            },
            {
                text: '♥基础框架',
                children: [
                    {
                        text: 'Mybatis',
                        children: ['/framework/mybatis/mybatis.md'],
                    },
                    {
                        text: 'Spring',
                        children: ['/framework/spring/spring.md'],
                    },
                    {
                        text: 'SpringMVC',
                        children: ['/framework/spring/springmvc.md'],
                    },
                    {
                        text: 'SpringSecurity',
                        children: ['/framework/security/springsecurity.md'],
                    },
                ],
            },
            {
                text: 'SpringBoot',
                children: ['/framework/springboot/springboot基础.md',
                    '/framework/springboot/springboot整合datajpa.md',
                    '/framework/springboot/springboot整合mybatis.md',
                    '/framework/springboot/springboot整合mybatisplus.md',
                    '/framework/springboot/springboot整合shiro.md',
                    '/framework/springboot/springboot整合security.md',
                    '/framework/springboot/springboot整合redis.md',
                    '/framework/springboot/springboot整合thymeleaf.md',
                    '/framework/springboot/springboot整合swagger.md',
                    '/framework/springboot/springboot整合国际化.md',
                    '/framework/springboot/springboot整合日志.md',
                    '/framework/springboot/springboot整合健康检查.md',
                    '/framework/springboot/springboot整合es.md',
                    '/framework/springboot/springboot整合druid监控.md',
                    '/framework/springboot/springboot整合邮件发送.md',
                    '/framework/springboot/springboot整合quartz.md',
                    '/framework/springboot/springboot整合shardingjdbc.md',
                    '/framework/springboot/springboot自定义starter.md',
                    ],
            },
            {
                text: 'SpringCloud',
                children: [
                    '/microservices/springcloud/springcloud.md',
                    '/microservices/springcloud/eureka.md',
                    '/microservices/springcloud/ribbon.md',
                    '/microservices/springcloud/hystrix.md',
                    '/microservices/springcloud/zuul.md',
                    '/microservices/springcloud/config.md',
                ],
            },
            {
                text: 'SpringCloudAlibaba',
                children: [
                    '/microservices/springcloudalibaba/nacos服务注册中心.md',
                    '/microservices/springcloudalibaba/openfeign.md',
                    '/microservices/springcloudalibaba/sentinel.md',
                    '/microservices/springcloudalibaba/Gateway.md',
                    '/microservices/springcloudalibaba/nacos配置中心.md',
                    '/microservices/springcloudalibaba/seata.md',
                    '/microservices/springcloudalibaba/sleuth.md',
                    '/microservices/springcloudalibaba/redission.md',
                ],
            }, {
                text: '中间件',
                children: [
                    '/middlecomponents/nginx/nginx.md',
                    '/middlecomponents/elasticsearch/elasticsearch.md',
                    '/middlecomponents/mycat/mycat.md',
                    '/middlecomponents/rabbitmq/rabbitmq.md',
                    '/middlecomponents/shardingsphere/shardingsphere.md',
                ],
            },
            {
                text: '面试题',
                children: ['/guide/Java发展历史背景.md'],
            },
        ],
        sidebarDepth:'3',
        lastUpdatedText:'上次更新',
        contributorsText:'开发人员'
    }),
    plugins: [
        backToTopPlugin(),
        nprogressPlugin(),
        searchPlugin({
            // 配置项
        }),
      /*  mediumZoomPlugin({
            // 配置项
        }),*/
        copyCodePlugin({
            // 插件选项
        }),
        photoSwipePlugin({
            // your options
        }),
    ],
})
