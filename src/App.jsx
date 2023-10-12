// ==============|| PACKAGES IMPORTS ||==================
import { Routes, Route } from "react-router-dom";

// ==============|| IMAGES IMPORTS ||==================

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NoMatch from "./pages/no_match/NoMatch";
import LayoutGeneral from "./layouts/layout_general/LayoutGeneral";
import Blogs from "./pages/blogs/Blogs";
import Testing from "./pages/testing/Testing";
import NewNote from "./pages/new_note/NewNote";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutGeneral />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="new-note" element={<NewNote />} />
          <Route path="testing" element={<Testing />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
