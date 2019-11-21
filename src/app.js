const Vue = require("vue");
const createRouter = require("./router/index.js");

module.exports = (context)=>{
    const router = createRouter();
    return new Vue({
        router,
        data:{
            message:"Hello,Vue SSR8888888!"
        },
        template:`
        <div>
           <div>
              <h1>{{message}}</h1>
              <ul>
                <li>
                  <router-link to="/">首页</router-link>
                </li>
                <li>
                  <router-link to="/about">about</router-link>
                </li>
              </ul>
           </div>
           <router-view></router-view>
        </div>
        `
    });
}