import React from "react";
import { useRoutes } from "react-router-dom";

import _publicRoutes from "./_public";

export const RootRouter = () => {
  return <>{useRoutes(_publicRoutes)}</>;
};
