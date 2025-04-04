import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

// Navbar component should include an Outlet for nested routes
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the child route elements */}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/book-now",
        element: <Contact />,
      },
    ],
  },
  {
      path: "/",
      element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);