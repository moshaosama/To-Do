import { createBrowserRouter, RouterProvider } from "react-router";
import { Error, Login, Signup, Todo } from "../Pages";

const RouterPages = () => {
  const router = createBrowserRouter([
    {
      path: "",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "sign-up",
          element: <Signup />,
        },
        {
          path: "to-dos",
          element: <Todo />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterPages;
