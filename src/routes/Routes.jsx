import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import News from "../Page/News/News";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader:()=> fetch('/news.json') 
            },
            {
                path:"/news/:id",
                element: <PrivateRoute><News></News></PrivateRoute>

            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    }
]);

export default routes;