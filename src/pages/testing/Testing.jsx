// ============== || PACKAGES IMPORTS || ==================
import { useState } from "react";

// ============== || ICONS IMPORTS || ==================

// ============== || IMAGES IMPORTS || ==================

// ============== || FUNCTIONS/UTILITIES IMPORTS || ==================

// ============== || HOOKS IMPORTS || ==================

// ============== || COMPONENTS IMPORTS || ==================
import NoteTypeSelect from "../../components/note_type_select/NoteTypeSelect";
import "./Testing.css";

import ideaIcon from "../../assets/images/svg/idea_icon.svg";
import SelectModal from "../../components/note_type_select/SelectModal";

const Testing = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <NoteTypeSelect
        bgClr={"#F8C715"}
        title={"Interesting Idea"}
        description={"Use free text area, feel free to write it all"}
        image={ideaIcon}
      />
      <button
        onClick={() => {
          setOpenModal(true);
        }}
        className="button"
      >
        Open modal
      </button>
      {/* <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <div>What Do You Want to Notes?</div>
      </Modal> */}
      <SelectModal open={openModal} setOpen={setOpenModal} />
    </div>
  );
};

export default Testing;
