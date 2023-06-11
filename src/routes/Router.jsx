// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Header from "../pages/Header";
// import Homepage from "../pages/Homepage";
// import Table from "../pages/table";

// export default function Router() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <>
//           <Header />
//           <Outlet />
//         </>
//       ),
//       children: [
//         { index: true, element: <Homepage /> },
//         { path: "/table", element: <Table /> },
//       ],
//     },
//   ]);
//   return <RouterProvider router={router} />;
// }

// { index: true, element: <Homepage /> },
// { path: "/header", element: <Header /> },
// { path: "/homepage", element: <Homepage /> },
// { path: "/login", element: <LoginPage /> },
// { path: "/register", element: <Register /> },
// { path: "/contact", element: <Contact /> },
// { path: "/dashboard", element: <Dashboard /> },
// { path: "/print", element: <Print /> },
// { path: "/search", element: <Search /> },
// { path: "/table", element: <Table /> },

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "../pages/Header";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import LoginPage from "../pages/LoginPage";
import Allproduct from "../pages/Allproduct";
import Contact from "../pages/Contactpage";
import CreatProductpage from "../pages/CreatProductpage";
import EditProductpage from "../pages/EditProductpage";

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
        { path: "/register", element: <Register /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/allproduct", element: <Allproduct /> },
        { path: "/creatproductpage", element: <CreatProductpage /> },
        { path: "/editproductpage/:id", element: <EditProductpage /> },

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
