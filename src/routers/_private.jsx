import React from "react";

import PrivateLayout from "../layouts/public/PrivateLayout";
import { ProtectedRoutes } from "./requiredAuth";

const HomeScreen = React.lazy(
  async () =>
    await import("../screens/publicScreens").then((module) => ({
      default: module.HomeScreen,
    }))
);

const _privateRoutes = [
  {
    element: (
      <ProtectedRoutes>
        <PrivateLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        element: <HomeScreen />,
        path: "/dashboard",
      },
    ],
  },
];

export default _privateRoutes;
