import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "../pages/Header";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import LoginPage from "../pages/LoginPage";
import Allproduct from "../pages/Allproduct";
import Contact from "../pages/Contactpage";
import CreatProductpage from "../pages/CreatProductpage";
import EditProductpage from "../pages/EditProductpage";
// import GuestHome from "../pages/Guesthome";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        { index: "/", element: <Homepage /> },
        { path: "/allproduct", element: <Allproduct /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/creatproductpage", element: <CreatProductpage /> },
        { path: "/editproductpage/:id", element: <EditProductpage /> },
        // { path: "/guesthome", element: <GuestHome /> },

        { path: "/contact", element: <Contact /> },
        { path: "/logout", element: <div className="text-xl">Logout</div> },
        {
          path: "*",
          element: <h1 className="text-xl text-red-300">Page not found</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
