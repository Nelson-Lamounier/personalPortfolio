import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ParticleBackground from "./component/particles.component/particle-backgound.component";

import Home from "./route/home/home.component";
import Navigation from "./route/navigation/navigation.component";
import ProjectDecription from "./component/project-description/project-description.component";
import { theme } from "./component/commun-styled/commun.styled";


const App: FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <ParticleBackground entered={true} />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/project/:id" element={<ProjectDecription/>}/>
        </Route>
      </Routes>
      </ThemeProvider>
  );
};

export default App;
