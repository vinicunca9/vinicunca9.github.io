var posts=["2024/10/30/一，Vue_框架的快速搭建/","2024/10/10/一，参考资料/","2024/10/15/七，JDBC_API和Spring_Data_JPA之间的爱恨情仇/","2024/10/30/三，后缀名为scss是什么文件呢_/","2024/10/16/三，Spring_Boot_CLI如何使用_生成项目必须需要它吗_/","2024/10/16/二，Spring,Spring_MVC,Spring_boot/","2024/10/30/二，Vue集成UI框架Elemen-Plus/","2024/10/30/五，Vue3集成Vue-Router实现路由跳转/","2024/10/16/六，使用Spring_Boot搭建SSM架构的项目/","2024/10/19/关于Vue和React/","2024/10/16/关于前端与后端通信的一些说明/","2024/10/16/关于项目跨域配置说明（非教程，知识点）/","2024/10/14/五，（实战，非知识点）用一个简单的项目去理解SSM架构/","2024/10/16/前端/","2024/10/13/四，SSM架构是什么_/","2024/10/16/测试模块/","2024/10/30/四，Element-Plus常用组件一览/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };