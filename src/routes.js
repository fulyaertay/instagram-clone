import Home from './pages/home';
import Login from './pages/login'

const routes =[{
    path:'/',
    element: <Home></Home>

}
,{
    path:'/login',
    element:<Login></Login>
}

]

export default routes;