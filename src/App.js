import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Home from "./component/Home";
import NavbarRouter from "./component/NavbarRouter";
import Quiz from "./component/Quiz";
import Footer from "./component/Footer";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTops from "./utils/ScrollToTops";

function App() {
  return (
    <>
      <div className="App">
        <NavbarRouter />
        <ScrollToTop />
        <ScrollToTops />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
