import React from "react";

import PrivateLayout from "../layouts/public/PrivateLayout";
import { ProtectedRoutes } from "./requiredAuth";

const HomeScreen = React.lazy(
  async () =>
    await import("../screens/publicScreens").then((module) => ({
      default: module.HomeScreen,
    }))
);

const WriteKanjiScreen = React.lazy(
  async () =>
    await import("../screens/privateScreens").then((module) => ({
      default: module.WriteKanjiScreen,
    }))
);

const PracticeKanjiScreen = React.lazy(
  async () =>
    await import("../screens/privateScreens").then((module) => ({
      default: module.PracticeKanjiScreen,
    }))
);

const CourseStudyScreen = React.lazy(
  async () =>
    await import("../screens/privateScreens").then((module) => ({
      default: module.CourseStudyScreen,
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

      {
        element: <PracticeKanjiScreen />,
        path: "/write-kanji",
      },
      {
        element: <WriteKanjiScreen />,
        path: "/write-kanji/:id",
      },
      {
        element: <CourseStudyScreen />,
        path: "course/:id/study",
      },
    ],
  },
];

export default _privateRoutes;
