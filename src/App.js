import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import NextPage from "./NextPage";

function App() {
  return (
    <Router>
      <Routes>=
        <Route path="/" element={<LandingPage />} />
        <Route path="/joy-of-giving" element={<LandingPage />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
