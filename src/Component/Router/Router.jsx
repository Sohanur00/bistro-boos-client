import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayOut from "../LayOut/mainLayOut";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            }

        ]
    },
]);
