// ============== || PACKAGES IMPORTS || ==================
import PropTypes from "prop-types";

// ============== || ICONS IMPORTS || ==================

// ============== || IMAGES IMPORTS || ==================

// ============== || FUNCTIONS/UTILITIES IMPORTS || ==================

// ============== || HOOKS IMPORTS || ==================

// ============== || COMPONENTS IMPORTS || ==================
import "./Modal.css";

const Modal = ({ children, openModal, setOpenModal }) => {
  const modalOutClick = () => {
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <div onClick={modalOutClick} className="modal">
          <div onClick={(e) => e.stopPropagation()} className="modal-main">
            <div className="children-container">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
};

export default Modal;
