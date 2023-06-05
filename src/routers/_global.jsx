import React from "react";
import NotFoundScreen from "../screens/globalScreens/notFound/NotFoundScreen";
import Course from "../screens/globalScreens/course/Course";
import PublicLayout from "../layouts/public/PublicLayout";
import PrivateLayout from "../layouts/public/PrivateLayout";
console.log("object", localStorage.getItem("isLogin"));

const isLogin = localStorage.getItem("isLogin"); // Lấy giá trị của isLogin từ localStorage

let layoutElement; // Biến để lưu trữ giá trị của element

if (isLogin) {
  layoutElement = <PrivateLayout />;
} else {
  layoutElement = <PublicLayout />;
}

console.log("layoutElement", layoutElement);
const _globalRoutes = [{ path: "*", element: <NotFoundScreen /> }];

console.log("_globalRoutes", _globalRoutes);

export default _globalRoutes;
