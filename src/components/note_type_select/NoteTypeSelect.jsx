// ==============|| PACKAGES IMPORTS ||==================
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// ==============|| IMAGES IMPORTS ||==================

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import "./NoteTypeSelect.css";
import { useAddNewNoteModal, useNoteType } from "../../store/Stores";

const NoteTypeSelect = ({ bgClr, image, title, description, type }) => {
  const setNoteType = useNoteType((state) => state.updateSelectedNote);
  const setOpenSelectModal = useAddNewNoteModal((state) => state.updateIsOpen);

  const navigate = useNavigate();

  const handleClick = (type) => {
    setNoteType(type);
    setOpenSelectModal(false);
    navigate("/new");
  };
  return (
    <div
      onClick={() => handleClick(type)}
      className="NoteTypeSelect"
      style={{ backgroundColor: `${bgClr}` }}
    >
      <div className="nts-image-part">
        <img src={image} alt="" className="image" />
      </div>
      <div className="nts-texts-part">
        <p className="nts-title">{title}</p>
        <p className=" nts-description">{description}</p>
      </div>
    </div>
  );
};

NoteTypeSelect.propTypes = {
  bgClr: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};

export default NoteTypeSelect;
