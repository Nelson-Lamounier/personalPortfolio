import { Outlet } from "react-router-dom";
import { FC } from "react";

import Navbar from "../../component/Navbar/Navbar.component";

const Navigation: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Navigation;
