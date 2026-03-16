import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../components/layout/app-layout";
import { ProductsPage } from "../features/products/pages/products-page";
import { NotFoundPage } from "../pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
