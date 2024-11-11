import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home/home";
import Project from "./Home/Portfolio/projects";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
};

export default App;
