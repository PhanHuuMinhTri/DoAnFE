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

const Course = React.lazy(
  async () =>
    await import("../screens/privateScreens").then((module) => ({
      default: module.Course,
    }))
);

const TestOnline = React.lazy(
  async () =>
    await import("../screens/privateScreens").then((module) => ({
      default: module.TestOnline,
    }))
);
const _privateRoutes = [
  {
    element: (
      <ProtectedRoutes>
        <PrivateLayout />
      </ProtectedRoutes>
    ),
    // eslint-disable-next-line no-sparse-arrays
    children: [
      {
        element: <HomeScreen />,
        path: "/dashboard",
      },
      ,
      {
        element: <Course />,
        path: "/course/:type",
      },

      {
        element: <TestOnline />,
        path: "/test-online/:id",
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
