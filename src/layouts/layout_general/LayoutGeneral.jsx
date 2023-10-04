// ==============|| PACKAGES IMPORTS ||==================
import PropTypes from "prop-types";

// ==============|| IMAGES IMPORTS ||==================

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import ContainerOverall from "../../components/containers/container_overall/ContainerOverall";
import NavbarPry from "../../components/nav_bars/navbar_pry/NavbarPry";
import "./LayoutGeneral.css";

const LayoutGeneral = ({ children }) => {
  return (
    <div className="layout-general">
      <NavbarPry />
      <ContainerOverall>{children}</ContainerOverall>
    </div>
  );
};

LayoutGeneral.propTypes = {
  children: PropTypes.element,
};

export default LayoutGeneral;
