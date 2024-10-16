var posts=["2024/10/16/qingt/","2024/10/16/关于前端与后端通信的一些说明/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };