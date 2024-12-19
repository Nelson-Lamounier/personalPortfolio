import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./route/home/home.component";
import Navigation from "./route/navigation/navigation.component";
import VideoPlayer from "./component/video/video-player.styled";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/project/:id" element={<VideoPlayer/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
