import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./../src/Pages/Login/Login";
import Order from "./Pages/Oreders/Order";
import PrivateRouter from "./Pages/Routes/PrivateRouter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: (
            <PrivateRouter>
              <Home></Home>
            </PrivateRouter>
          ),
        },
        {
          path: "/order",
          element: (
            <PrivateRouter>
              <Order></Order>
            </PrivateRouter>
          ),
        },
        {
          path: "/registration",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
