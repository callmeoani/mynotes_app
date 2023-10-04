// ==============|| PACKAGES IMPORTS ||==================
import PropTypes from "prop-types";

// ==============|| IMAGES IMPORTS ||==================

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import "./ContainerOverall.css";

const ContainerOverall = ({ children }) => {
  return <div className="container-overall">{children}</div>;
};

ContainerOverall.propTypes = {
  children: PropTypes.element,
};

export default ContainerOverall;
