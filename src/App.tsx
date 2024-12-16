import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./route/home/home.component";
import Navigation from "./route/navigation/navigation.component";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
