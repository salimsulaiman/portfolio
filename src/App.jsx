import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./page/About";
import Resume from "./page/Resume";
import Contact from "./page/Contact";
import Project from "./page/Project";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
