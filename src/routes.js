import AuthLayout from './pages/auth';
import Home from './pages/home';
import Login from './pages/login'

const routes =[{
    path:'/',
    element: <Home></Home>,
    auth:true

}
,{
    path:'/auth',
    element:<AuthLayout></AuthLayout>,
    children:[
        {
            path:'login',
            element:<Login></Login>
        }
    ]
}

]

export default routes;