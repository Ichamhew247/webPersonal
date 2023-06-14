import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Header from "../pages/Header";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import LoginPage from "../pages/LoginPage";
import Allproduct from "../pages/Allproduct";
import Contact from "../pages/Contactpage";
import CreatProduct from "../pages/CreatProductpage";
import EditProductpage from "../pages/EditProductpage";
// import GuestHome from "../pages/Guesthome";

export default function Router() {
  const { user } = useAuth();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      // children: [
      //   { index: "/", element: <Homepage /> },
      //   { path: "/allproduct", element: <Allproduct /> },
      //   { path: "/register", element: <Register /> },
      //   { path: "/login", element: <LoginPage /> },
      //   { path: "/creatproductpage", element: <CreatProduct /> },
      //   { path: "/editproductpage/:id", element: <EditProductpage /> },
      //   // { path: "/guesthome", element: <GuestHome /> },

      //   { path: "/contact", element: <Contact /> },
      //   { path: "/logout", element: <div className="text-xl">Logout</div> },
      //   {
      //     path: "*",
      //     element: <h1 className="text-xl text-red-300">Page not found</h1>,
      //   },
      // ],
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "allproduct",
          element: <Allproduct />,
        },
        {
          path: "creatproductpage",
          element: <CreatProduct />,
        },
        {
          path: "editproductpage/:id",
          element: <EditProductpage />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <h1 className="text-xl text-red-300">Page not found</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
