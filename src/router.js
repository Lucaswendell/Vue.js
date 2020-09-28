import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Home from './components/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/hello', component: HelloWorld, name: 'HelloWorld'},
        {path: '/home/:nome', component: Home,}
    ]
});