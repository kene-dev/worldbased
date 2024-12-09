import { useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Lenis from 'lenis';
import SingleProduct from './pages/products/SingleProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
  // {
  //   path: "/signin",
  //   element: <Signin />,
  // },
  // {
  //   path: "products",
  //   element: <Products />,
  // },
  // {
  //   path: "products/:id",
  //   element: <SingleProduct />,
  // },
  // {
  //   path: "cart",
  //   element: <Cart />,
  // },
  // {
  //   path: "profile",
  //   element: <Profile />,
  // },
  // {
  //   // Parent route for admin pages
  //   element: <AdminLayout />, // AdminLayout will include <Outlet />
  //   children: [
  //     {
  //       path: "admin/user", // Nested route
  //       element: <UserDetails />,
  //     },
  //     {
  //       path: "admin/order",
  //       element: <Order />,
  //     },
  //     {
  //       path: "admin/stocks",
  //       element: <Stocks />,
  //     },
  //     {
  //       path: "admin/categories",
  //       element: <Categories />,
  //     },
  //     // Add more nested admin routes here if needed
  //   ],
  // },
]);


function App() {
  useEffect(() => {
    const lenis = new Lenis();
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    },[])
  return <RouterProvider router={router} />;
}

export default App;