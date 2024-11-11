import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home/home";
import Portfolio from "./Portfolio/portfolio";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
