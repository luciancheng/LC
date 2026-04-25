import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import ExperiencePage from "./pages/ExperiencePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/experience/:id" element={<ExperiencePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
