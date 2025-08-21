import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Pages from "./pages/Pages";
import TopBar from "./TopBar/TopBar";

function App() {
  return (
    <Router>
      <TopBar/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </Router>
  );
}

export default App;
