// ==============|| PACKAGES IMPORTS ||==================
import PropTypes from "prop-types";

// ==============|| IMAGES IMPORTS ||==================
import ideaIcon from "../../assets/images/svg/idea_icon.svg";
import buyingIcon from "../../assets/images/svg/buying_icon.svg";
import goalsIcon from "../../assets/images/svg/goals_icon.svg";
import guidanceIcon from "../../assets/images/svg/guidance_icon.svg";
import taskIcon from "../../assets/images/svg/task_icon.svg";

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import "./SelectModal.css";
import Modal from "../modal/Modal";
import NoteTypeSelect from "./NoteTypeSelect";

const SelectModal = ({ open, setOpen }) => {
  const noteTypes = [
    {
      type: "idea",
      title: "Interesting Idea",
      description: "Use free text area, feel free to write it all",
      image: ideaIcon,
      bgClr: "#6A3EA1",
    },
    {
      type: "buying",
      title: "Buying Something",
      description: "Use checklist, so you won’t miss anything",
      image: buyingIcon,
      bgClr: "#60D889",
    },
    {
      type: "goals",
      title: "Goals",
      description: "Near/future goals, notes and keep focus ",
      image: goalsIcon,
      bgClr: "#F8C715",
    },
    {
      type: "guidance",
      title: "Guidance",
      description: "Create guidance for routine activities ",
      image: guidanceIcon,
      bgClr: "#CE3A54",
    },
    {
      type: "tasks",
      title: "Routine Tasks",
      description: "Checklist with sub-checklist",
      image: taskIcon,
      bgClr: "#DEDC52",
    },
  ];
  return (
    <Modal openModal={open} setOpenModal={setOpen}>
      <div className="selectModal">
        <p>What Do You Want to Notes?</p>

        <ul className="all-noteTypes">
          {noteTypes.map((noteType, index) => (
            <li key={index} className="noteType-li">
              <NoteTypeSelect
                bgClr={noteType.bgClr}
                title={noteType.title}
                description={noteType.description}
                image={noteType.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

SelectModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default SelectModal;
