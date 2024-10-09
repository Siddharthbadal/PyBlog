import { createBrowserRouter } from "react-router-dom";
import  CallBack  from "./callback";
import  SignUp  from "./sign-up";
import App from "../App";
import Home from "./home";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                'path': '/',
                index: true,
                 Component: Home
            },

            {
                'path': '/signup',
                 Component: SignUp
            },
            {
                'path': '/callback',
                Component: CallBack
            },

        ],
    }
    
]);