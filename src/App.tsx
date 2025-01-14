import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ParticleBackground from "./component/particles.component/particle-backgound.component";

import Home from "./route/home/home.component";
import Navigation from "./route/navigation/navigation.component";
import ProjectDecription from "./component/project-description/project-description.component";
import { theme } from "./component/commun-styled/constants.ts";
import ScrollToTop from "./component/util/scrollToTop.tsx";
import Layout from "./component/layout/Layout.tsx";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ParticleBackground entered={true} />
      {/* Scroll to top on route changes */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/project/:id" element={<ProjectDecription />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
