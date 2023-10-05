// ============== || PACKAGES IMPORTS || ==================
import { Routes, Route } from "react-router-dom";
import App from "../App";
import About from "../pages/about/About";
import NoMatch from "../pages/no_match/NoMatch";

// ============== || ICONS IMPORTS || ==================

// ============== || IMAGES IMPORTS || ==================

// ============== || FUNCTIONS/UTILITIES IMPORTS || ==================

// ============== || HOOKS IMPORTS || ==================

// ============== || COMPONENTS IMPORTS || ==================

const Navigation = () => {
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<App />} />
      <Route path="about" element={<About />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}

      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>;
};

export default Navigation;
