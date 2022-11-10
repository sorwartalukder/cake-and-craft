import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import UpdateReview from "../../pages/MyReviews/UpdateReview/UpdateReview";
import NotFound from "../../pages/NotFound/NotFound";
import Register from "../../pages/Register/Register";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Serviecs/Services";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://cake-and-craft-server.vercel.app/services/home')
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://cake-and-craft-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/addService',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },

        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: '/userReviews',
        element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
    },
    {
        path: '/blogs',
        element: <Blogs></Blogs>
    },
    {
        path: '/update/review/:id',
        element: <PrivateRoutes><UpdateReview></UpdateReview></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://cake-and-craft-server.vercel.app/update/review/${params.id}`)
    }

])
export default routes;