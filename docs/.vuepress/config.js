module.exports = {
  title: 'Scorpio UI',
  description: 'Scorpio UI 是一个好用的 UI 框架，提供了......一系列的常用组件，适合移动端和 PC 端的使用',
  themeConfig: {
    nav:[
      {text:'主页', link:'/'},
      {text:'文档', link:'/guide/'},
      {text:'交流', link:'http://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/',
        '/get-started/', ]
      } ,
       
      {
        title: '组件',
        children: [ '/components/button' ]
      } 
    ]
  }
}