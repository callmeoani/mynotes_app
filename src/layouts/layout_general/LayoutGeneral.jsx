// ==============|| PACKAGES IMPORTS ||==================
import { Outlet } from "react-router-dom";

// ==============|| IMAGES IMPORTS ||==================

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import NavbarPry from "../../components/nav_bars/navbar_pry/NavbarPry";
import "./LayoutGeneral.css";

const LayoutGeneral = () => {
  return (
    <div className="layout-general">
      <NavbarPry />
      <Outlet />
    </div>
  );
};

export default LayoutGeneral;
