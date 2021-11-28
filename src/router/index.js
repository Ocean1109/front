import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login";
import Register from "../views/Register";
import Index from "../views/Index"
import Person from "../components/Person";

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Index,
            children:[
                {
                    path:"person",
                    component:Person
                }
            ]
        },
        {
            path:'/login',
            component:Login,
        },
        {
            path: '/register',
            component: Register,
        },
    ]
})

export default router