//Router imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import NewBudget from "./components/pages/NewBudget";
import MyBudgets from "./components/pages/MyBudgets";

// Layout imports
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Container customClass="minHeight">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/NewBudget" element={<NewBudget />} />
            <Route path="/MyBudgets" element={<MyBudgets />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Container>

        <Footer />
      </Router>
    </>
  );
}

export default App;
