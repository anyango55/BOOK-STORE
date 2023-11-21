import { 
     
    RouterProvider, 
    createBrowserRouter , 
} from "react-router-dom";
import App from "../App";
import Landing from "../landing/Landing";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";


const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />,
        children: [
        {
            path: "/",
            element: <Landing />,
        },

        {
            path: "/shop",
            element: <Shop />,
        },
        
        {
            path: "/about",
            element: <About />,
        },
        
        {
            path: "/blog",
            element: <Blog />,
        }
        
        ]
    },
]);

export default router;