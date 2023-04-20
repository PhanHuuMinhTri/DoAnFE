import React from "react";

import { PublicLayout } from "../layouts/public/PublicLayout";

const LoginScreen = React.lazy(
  async () =>
    await import("../screens/publicScreens").then((module) => ({
      default: module.LoginScreen,
    }))
);

const RegisterScreen = React.lazy(
  async () =>
    await import("../screens/publicScreens").then((module) => ({
      default: module.RegisterScreen,
    }))
);

const _publicRoutes = [
  {
    element: <PublicLayout />,
    children: [
      {
        element: <LoginScreen />,
        path: "login",
      },
      {
        element: <RegisterScreen />,
        path: "register",
      },
    ],
  },
];

export default _publicRoutes;
