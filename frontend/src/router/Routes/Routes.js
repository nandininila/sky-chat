import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Chat from "../../pages/Chat/Chat";
import Home from "../../pages/Home/Home";

export const routes = createBrowserRouter([{
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/chat",
            element: <Chat></Chat>
        },
    ]
}]);