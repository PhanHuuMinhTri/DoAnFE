import React from "react";
import NotFoundScreen from "../screens/globalScreens/notFound/NotFoundScreen";

const _globalRoutes = [{ path: "*", element: <NotFoundScreen /> }];

console.log("_globalRoutes", _globalRoutes);

export default _globalRoutes;
