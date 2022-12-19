import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layout/Dashboard";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Blogs from "../../pages/Blogs/Blogs";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import Payment from "../../pages/Dashboard/Payment/Payment";
import UserProfile from "../../pages/Dashboard/UserProfile/UserProfile";
import Home from "../../pages/home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import UpdateReview from "../../pages/MyReviews/UpdateReview/UpdateReview";
import NotFound from "../../pages/NotFound/NotFound";
import Register from "../../pages/Register/Register";
import BuyNow from "../../pages/ServiceDetails/BuyNow/BuyNow";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Serviecs/Services";
import Support from "../../pages/Support/Support";
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
                path: '/support',
                element: <Support />,
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://cake-and-craft-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/buy-now/:id',
                element: <BuyNow></BuyNow>,
                loader: ({ params }) => fetch(`https://cake-and-craft-server.vercel.app/services/${params.id}`)
            },


        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },

    {
        path: '/blogs',
        element: <Blogs></Blogs>
    },

    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
            },
            {
                path: '/dashboard/addService',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/dashboard/userReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/dashboard/my-orders',
                element: <PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>
            },
            {
                path: '/dashboard/my-orders/:id',
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://cake-and-craft-server.vercel.app/order/${params.id}`)
            },
            {
                path: '/dashboard/update/review/:id',
                element: <PrivateRoutes><UpdateReview></UpdateReview></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://cake-and-craft-server.vercel.app/update/review/${params.id}`)
            },
        ]
    }

])
export default routes;