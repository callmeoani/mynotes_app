// ==============|| PACKAGES IMPORTS ||==================
import { Outlet } from "react-router-dom";
// import { useState } from "react";

// ==============|| IMAGES IMPORTS ||==================

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import NavbarPry from "../components/nav_bars/navbar_pry/NavbarPry";
import "./LayoutGeneral.css";
import SelectModal from "../components/note_type_select/SelectModal";
import { useAddNewNoteModal } from "../store/Stores";

const LayoutGeneral = () => {
  const openSelectModal = useAddNewNoteModal((state) => state.isOpen);
  const setOpenSelectModal = useAddNewNoteModal((state) => state.updateIsOpen);

  return (
    <div className="layout-general">
      <NavbarPry />
      <SelectModal open={openSelectModal} setOpen={setOpenSelectModal} />
      <Outlet />
    </div>
  );
};

export default LayoutGeneral;
