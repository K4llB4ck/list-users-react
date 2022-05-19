import Login from '../containers/Login';
import {Users} from '../containers/BackOffice';
import Home from '../containers/Home';
const routes = [
  
    {
        path: '/login',
        component: Login,
        private: false
    },{
        path:'/users',
        component:Users,
        private:true
    },
    {
        path:'/',
        component:Home,
        private:false
    }
];

export default routes;