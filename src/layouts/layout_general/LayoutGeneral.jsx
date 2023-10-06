// ==============|| PACKAGES IMPORTS ||==================
import { Outlet } from "react-router-dom";
import { useState } from "react";

// ==============|| IMAGES IMPORTS ||==================

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import NavbarPry from "../../components/nav_bars/navbar_pry/NavbarPry";
import "./LayoutGeneral.css";
import SelectModal from "../../components/note_type_select/SelectModal";

const LayoutGeneral = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="layout-general">
      <NavbarPry />
      <SelectModal open={openModal} setOpen={setOpenModal} />
      <Outlet />
    </div>
  );
};

export default LayoutGeneral;
