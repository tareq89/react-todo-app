import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Ecommerce } from "./Ecommerce/Ecommerce";
import { ProductDetails } from "./Ecommerce/ProductDetails";
import { Link } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Link to="/todo">Go to TODO app page</Link>,
  },
  {
    path: "/todo",
    element: <App />,
  },
  {
    path: "/ecommerce",
    element: <Ecommerce />,
  },
  {
    path: "/ecommerce/product/:id",
    element: <ProductDetails />,
  },
]);
