import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Authinticate/Login/Login";
import Registar from "../Pages/Authinticate/Registar/Registar";
import PriverRoutes from "./PriverRoutes";
import Secret from "../Pages/Shared/Secret";
import DashBoard from "../Main/DashBoard";
import MyCart from "../Pages/DeshBoard/MyCart/MyCart";
import AllUsers from "../Pages/DeshBoard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/DeshBoard/AddItem/AddItem";
import ManageItems from "../Pages/DeshBoard/ManageItems/ManageItems";
import Payment from "../Pages/DeshBoard/Payment/Payment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/order/:category",
          element:<Order></Order>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/registar",
          element:<Registar></Registar>
        },
        {
          path:"/secret",
          element:<PriverRoutes><Secret></Secret></PriverRoutes>
        }
      ]
    },
    {
      path:"/deshboard",
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:"mycart",
          element:<MyCart></MyCart>
        },
        {
          path:"allusers",
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageitems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        }
      ]
    }
  ]);

  export default router;