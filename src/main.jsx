import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./AuthProjects/Root.jsx";
import Home from "./AuthProjects/Home.jsx";
import LogIn from "./AuthProjects/LogIn.jsx";
import Register from "./AuthProjects/Register.jsx";
import AuthProvider, { AuthContext } from "./AuthProjects/AuthProvider.jsx";
// import Home from "./Components/Home.jsx";
// import Root from "./Components/Root.jsx";
// import LogIn from "./Components/LogIn.jsx";
// import Register from "./Components/Register.jsx";
// import RegisterHero from "./Components/RegisterHero.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
