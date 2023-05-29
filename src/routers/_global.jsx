import React from "react";
import NotFoundScreen from "../screens/globalScreens/notFound/NotFoundScreen";
import Course from "../screens/globalScreens/course/Course";
import PublicLayout from "../layouts/public/PublicLayout";
import PrivateLayout from "../layouts/public/PrivateLayout";

const _globalRoutes = [
  {
    element: localStorage.getItem("isLogin") ? (
      <PrivateLayout />
    ) : (
      <PublicLayout />
    ),
    children: [
      {
        element: <Course />,
        path: "/course/:type",
      },
      { path: "*", element: <NotFoundScreen /> },
    ],
  },
];

export default _globalRoutes;
