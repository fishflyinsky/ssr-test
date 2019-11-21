const express = require("express");
const vueApp = require("./src/app.js");
let path = require("path");
const vueServerRender = require("vue-server-renderer").createRenderer({
    template:require("fs").readFileSync(path.join(__dirname,"./index.html"),"utf-8")
});

const app = express();

app.get("*",(request,response)=>{
    // const vueApp = new Vue({
    //     data:{
    //         message:"Hello,Vue SSR!"
    //     },
    //     template:'<h1>{{message}}</h1>'
    // });
    let vm = vueApp({});
    response.status(200);
    response.setHeader('Content-Type','text/html;charset-utf-8;');
    vueServerRender.renderToString(vm).then((html)=>{
         response.end(html);
    }).catch(error=>console.log(error));
})

app.listen(3000,()=>{
    console.log("服务启动！")
})