const vueRouter = require("vue-router");//vue-router前端控制渲染
const Vue = require("vue");

Vue.use(vueRouter);

module.exports=()=>{
    return new vueRouter({
        mode:"history",
        routes:[
            {
                path:"/",
                component:{
                    template:`<h1>这是首页</h1>`
                },
                name:"home"
            },
            {
                path:"/about",
                component:{
                    template:`<h1>about me</h1>`
                },
                name:"about"
            }
        ]
    })
}