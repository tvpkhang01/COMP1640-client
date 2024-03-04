import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <MainLayout/>,
                children: [
                    {
                        path: "",
                        element: <Home />
                    }
                ]
            }
        ]
            

        
        
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default Router;