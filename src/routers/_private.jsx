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

const ListCourse = React.lazy(
  async () =>
    await import("../screens/privateScreens").then((module) => ({
      default: module.ListCourse,
    }))
);

const TestOnline = React.lazy(
  async () =>
    await import("../screens/privateScreens").then((module) => ({
      default: module.TestOnline,
    }))
);

const QuestionTestOnline = React.lazy(
  async () =>
    await import("../screens/privateScreens").then((module) => ({
      default: module.QuestionTestOnline,
    }))
);

const RankTestOnline = React.lazy(
  async () =>
    await import("../screens/privateScreens").then((module) => ({
      default: module.RankTestOnline,
    }))
);

const Profile = React.lazy(
  async () =>
    await import("../screens/privateScreens").then((module) => ({
      default: module.Profile,
    }))
);

const ChangePassword = React.lazy(
  async () =>
    await import("../screens/privateScreens").then((module) => ({
      default: module.ChangePassword,
    }))
);

const Teacher = React.lazy(
  async () =>
    await import("../screens/privateScreens").then((module) => ({
      default: module.Teacher,
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
        element: <ListCourse />,
        path: "/list-course",
      },

      {
        element: <TestOnline />,
        path: "/test-online",
      },
      {
        element: <QuestionTestOnline />,
        path: "test-online/:id",
      },
      {
        element: <RankTestOnline />,
        path: "test-online/rank/:id",
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

      {
        element: <Profile />,
        path: "profile/:id",
      },

      {
        element: <ChangePassword />,
        path: "profile/password/:id",
      },

      {
        element: <Teacher />,
        path: "teacher",
      },
    ],
  },
];

export default _privateRoutes;
