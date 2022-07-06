import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Home from "./component/Home";
import NavbarRouter from "./component/NavbarRouter";
import Quiz from "./component/Quiz";

function App() {
  return (
    <>
      <div className="App">
        <NavbarRouter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
