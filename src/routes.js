import AuthLayout from "./pages/auth";
import Home from "./pages/home";
import Login from "./pages/login";
import PrivateRoute from "./components/PrivateRoute";
const routes = [
  {
    path: "/",
    element: <Home></Home>,
    auth: true,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
];
const authCheck = routes => 
  routes?.map(route=> {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
    return route;
  });
;
export default authCheck(routes);
