// ==============|| PACKAGES IMPORTS ||==================
import PropTypes from "prop-types";

// ==============|| IMAGES IMPORTS ||==================

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import "./NoteTypeSelect.css";

const NoteTypeSelect = ({ bgClr, image, title, description }) => {
  return (
    <div className="NoteTypeSelect" style={{ backgroundColor: `${bgClr}` }}>
      <div className="nts-image-part">
        <img src={image} alt="" className="image" />
      </div>
      <div className="nts-texts-part">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

NoteTypeSelect.propTypes = {
  bgClr: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default NoteTypeSelect;
