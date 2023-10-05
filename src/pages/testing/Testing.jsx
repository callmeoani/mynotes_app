// ============== || PACKAGES IMPORTS || ==================

// ============== || ICONS IMPORTS || ==================

// ============== || IMAGES IMPORTS || ==================

// ============== || FUNCTIONS/UTILITIES IMPORTS || ==================

// ============== || HOOKS IMPORTS || ==================

// ============== || COMPONENTS IMPORTS || ==================
import NoteTypeSelect from "../../components/note_type_select/NoteTypeSelect";
import "./Testing.css";

import ideaIcon from "../../assets/images/svg/idea_icon.svg";

const Testing = () => {
  return (
    <div>
      <NoteTypeSelect
        bgClr={"#F8C715"}
        title={"Interesting Idea"}
        description={"Use free text area, feel free to write it all"}
        image={ideaIcon}
      />
    </div>
  );
};

export default Testing;
