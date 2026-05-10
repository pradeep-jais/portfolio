import "./styles/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ToolTip from "./components/ui/ToolTip";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      {/* Global tooltip for icons */}
      <ToolTip />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
