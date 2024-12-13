import { FC } from "react";
import { Routes, Route,  } from "react-router-dom";

import Home from "./route/home/home.component";

const App: FC = () => {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </>
  );
};

export default App;
