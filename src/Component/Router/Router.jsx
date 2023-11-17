import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayOut from "../LayOut/mainLayOut";
import Home from "../Pages/Home/Home";
import MenuPage from "../Pages/MenuPage/MenuPage";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Secret from "../Pages/shared/Secret";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path : '/menu',
                element:<MenuPage></MenuPage>
            },
            {
                path:'/order/:category',
                element: <Order></Order>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
            {
                path :'/secret',
                element :<PrivateRoute><Secret></Secret></PrivateRoute>
                
            }

        ]
    },
]);
