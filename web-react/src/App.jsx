import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home/home";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Projects from "./Projects/projects"; // Import the Projects component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} /> {/* Add this line */}
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
};

export default App;
