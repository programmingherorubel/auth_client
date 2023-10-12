import { createBrowserRouter } from "react-router-dom";
import Main from "../Page/Main";
import App from "../App";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Personal from "../Page/Personal";
import Dashbord from "../components/Dashbord";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Main/>,
            children:[
                {
                    path:'/',
                    element:<App/>
                },
                {
                    path:'/personal',
                    element:<Personal/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/register',
                    element:<Register/>
                },
            ]
        },
        {
            path:'/dashbord',
            element:<Dashbord/>
        }
    ]
)

export default router 