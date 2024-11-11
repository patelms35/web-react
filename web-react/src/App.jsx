import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home/home";
import Portfolio from "./Portfolio/portfolio";
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Analytics />
    </Router>
  );
};

export default App;
