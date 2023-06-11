import React from "react";

import PublicLayout from "../layouts/public/PublicLayout";
import { RequiredAuth } from "./requiredAuth";

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

const HomeScreen = React.lazy(
  async () =>
    await import("../screens/publicScreens").then((module) => ({
      default: module.HomeScreen,
    }))
);

const Course = React.lazy(
  async () =>
    await import("../screens/publicScreens").then((module) => ({
      default: module.Course,
    }))
);

const Teacher = React.lazy(
  async () =>
    await import("../screens/publicScreens").then((module) => ({
      default: module.Teacher,
    }))
);

const _publicRoutes = [
  {
    element: (
      <RequiredAuth>
        <PublicLayout />
      </RequiredAuth>
    ),
    children: [
      {
        element: <HomeScreen />,
        path: "/",
      },
      {
        element: <LoginScreen />,
        path: "login",
      },
      {
        element: <RegisterScreen />,
        path: "register",
      },
      {
        element: <Course />,
        path: "/course/public/:type",
      },
      {
        element: <Teacher />,
        path: "/public/teacher",
      },
    ],
  },
];

export default _publicRoutes;
